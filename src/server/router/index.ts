import { t } from "../trpc";

import { exampleRouter } from "./example";

/*
 * This File Contains the Root of the Router
 */
export const appRouter = t.router({
  test: exampleRouter,
});

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter;
