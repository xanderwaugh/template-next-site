import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "~/utils/prisma";

import { createTransport } from "nodemailer";
import { html, text } from "~/utils";

import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider, { EmailConfig } from "next-auth/providers/email";

const NextAuthConfig: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      // * Include id and role on session
      if (session.user) {
        session.user = { ...session.user, ...user };
      }
      return session;
    },
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT ?? "",
      clientSecret: process.env.DISCORD_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT ?? "587"),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier: email, url, provider }) {
        return sendVerificationRequest({
          identifier: email,
          url,
          provider: provider,
        });
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development" ? true : false,
  logger: {
    error: (code, metadata) => {
      console.log(`Error: ${code}`, metadata);
    },
    warn: (code) => {
      console.log(`Warn: ${code}`);
    },
    // debug: (code) => { console.log(`Debug: ${code}`) },
  },
  session: {
    strategy: "database",
    maxAge: 60 * 60 * 24 * 31, // 31 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  pages: {
    // signIn: "/auth/signin/",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(NextAuthConfig);
export { NextAuthConfig };

async function sendVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
}) {
  const { identifier, url, provider } = params;
  const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: html({ url, host }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}
