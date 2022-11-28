import trpc from "@trpc/server";
import trpcNext from "@trpc/server/adapters/next";

import { Session } from "next-auth";
import { getSession } from "next-auth/react";

import { prisma } from "~/utils/prisma";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  session: Session | null;
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 * Helper for trpc's 'createSSGHelpers' without req/res
 */
export async function createContextInner(opts: CreateContextOptions) {
  return {
    session: opts.session,
    prisma,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(
  opts: trpcNext.CreateNextContextOptions,
): Promise<Context> {
  // for API-response caching see https://trpc.io/docs/caching
  const session = await getSession({
    req: opts.req,
  });

  return await createContextInner({
    session: session,
  });
}
