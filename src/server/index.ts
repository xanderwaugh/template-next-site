import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { NextPageContext } from "next";
import superjson from "superjson";
import { getBaseUrl } from "~/utils";

// ℹ️ Type-only import:
import type { AppRouter } from "~/server/router";

/**
 * Extend `NextPageContext` with meta data that can be picked up by `responseMeta()` when server-side rendering
 */
export interface SSRContext extends NextPageContext {
  /**
   * Set HTTP Status code
   * @example
   * const utils = trpc.useContext();
   * if (utils.ssrContext) {
   *   utils.ssrContext.status = 404;
   * }
   */
  status?: number;
}

/* Actual App */
/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */
export const trpc = createTRPCNext<AppRouter, SSRContext>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      transformer: superjson,
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          /**
           * Set custom request headers on every request from tRPC
           * @link http://localhost:3000/docs/v10/header
           * @link http://localhost:3000/docs/v10/ssr
           */
          headers() {
            if (ctx?.req) {
              // To use SSR properly, you need to forward the client's headers to the server
              // This is so you can pass through things like cookies when we're server-side rendering

              // If you're using Node 18, omit the "connection" header
              const {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                connection: _connection,
                ...headers
              } = ctx.req.headers;
              return {
                ...headers,
                // "x-ssr": "1",
              };
            }
            return {};
          },
        }),
      ],
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      queryClientConfig: {},
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta(opts) {
    const ctx = opts.ctx as SSRContext;

    if (ctx.status) {
      // If HTTP status set, propagate that
      return {
        status: ctx.status,
      };
    }

    const error = opts.clientErrors[0];
    if (error) {
      // Propagate http first error from API calls
      return {
        status: error.data?.httpStatus ?? 500,
      };
    }

    // for app caching with SSR see https://trpc.io/docs/caching
    return {};
  },
});
