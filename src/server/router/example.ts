import { t } from "../trpc";
import { z } from "zod";

export const exampleRouter = t.router({
  hello: t.procedure
    .input(
      z.object({
        name: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const { name } = input;
      return "Hello" + name;
    }),
});
