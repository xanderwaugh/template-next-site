import { DefaultSession, DefaultUser } from "next-auth";

export type Role = "USER" | "ADMIN";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: DefaultSession["user"] & {
      id: string;
      role: Role;
    };
  }
  interface User extends DefaultUser {
    id: string;
    role: Role;
  }
}

export type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
};
