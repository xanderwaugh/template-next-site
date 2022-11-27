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
  // responseMeta() {
  // },
});
