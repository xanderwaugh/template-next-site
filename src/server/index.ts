import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { NextPageContext } from "next";
import superjson from "superjson";
import { getBaseUrl } from "~/utils";
import { QueryClientConfig } from "@tanstack/react-query";

//*ℹ️ Type-only import:
import type { AppRouter } from "~/server/router";

const myQueryClientConf: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // * Data is never stale
      cacheTime: 60 * 1000 * 25, // * Data Cached for 25 minutes
      // cacheTime: 0,
      retry: 1, // * Retry on Error Once
      retryDelay: 1000 * 3, // * Retry After 3 Seconds
      notifyOnChangeProps: ["data", "isLoading", "isSuccess", "isError"], // * Only Notify on Data or Loading Changes
    },
  },
};

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
export const trpc = createTRPCNext<
  AppRouter,
  SSRContext,
  "ExperimentalSuspense" // * Enable Suspense
>({
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
                "x-ssr": "1",
              };
            }
            return {};
          },
        }),
      ],
      // * @link https://react-query.tanstack.com/reference/QueryClient
      queryClientConfig: myQueryClientConf,
    };
  },
  // * @link https://trpc.io/docs/ssr
  ssr: true,
  // * Set headers or status code when doing SSR
  responseMeta(opts) {
    const ctx = opts.ctx as SSRContext;

    // If HTTP status set, propagate that
    if (ctx.status) return { status: ctx.status };

    // Propagate http first error from API calls
    const error = opts.clientErrors[0];
    if (error && error.data?.httpStatus)
      return { status: error.data?.httpStatus ?? 500 };

    // for app caching with SSR see https://trpc.io/docs/caching
    return {};
  },
});
