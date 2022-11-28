import { Context } from "./context";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return {
      message: shape.message,
    };
  },
});

const isAdmin = t.middleware(async ({ ctx, next }) => {
  // ROLE.ADMIN
  if (ctx.session?.user?.role !== "ADMIN") {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      user: ctx.session.user,
    },
  });
});

export const adminProcedure = t.procedure.use(isAdmin);
