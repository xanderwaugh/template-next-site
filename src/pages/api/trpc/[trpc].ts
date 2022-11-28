import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "~/server/router";
import { createContext } from "~/server/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  /**
   * @link https://trpc.io/docs/error-handling
   */
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    }
  },
  /**
   * Enable query batching
   */
  batching: {
    enabled: true,
  },
  /**
   * @link https://trpc.io/docs/caching#api-response-caching
   */
  responseMeta({ paths, type, errors }) {
    // assuming you have all your public routes with the keyword `public` in them
    const allPublic = paths && paths.every((path) => path.includes("test"));
    // checking that no procedures errored
    const allOk = errors.length === 0;
    // checking we're doing a query request
    const isQuery = type === "query";

    // for app caching with SSR see https://trpc.io/docs/caching
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

    if (allPublic && allOk && isQuery) {
      return {
        headers: {
          "cache-control": `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
        },
      };
    }

    return {};
  },
});
