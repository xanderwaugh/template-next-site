import "~/styles/globals.css";
import React, { StrictMode, useEffect, useState } from "react";
import { AppType } from "next/app";
import { Router } from "next/router";

import { trpc } from "~/server";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "~/utils/seoConfig";

import { Poppins } from "@next/font/google";
import { Header, LoadingPage } from "~/components";

import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
  router,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <main className={poppins.className}>
      <DefaultSeo {...SEOConfig} />

      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`page-${router.pathname}`}
          initial={{ opacity: 0.5, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.5, x: 200 }}
          transition={{ type: "tween" }}
          onAnimationComplete={() => window.scrollTo(0, 0)}
          className="page"
        >
          <SessionProvider session={pageProps.session}>
            <StrictMode>
              {loading ? (
                <LoadingPage />
              ) : (
                <Component key={router.asPath} {...pageProps} />
              )}
            </StrictMode>
          </SessionProvider>
        </motion.div>
      </AnimatePresence>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="dark"
        toastStyle={{ fontFamily: "var(--font-poppins)" }}
      />
    </main>
  );
};

export default trpc.withTRPC(MyApp);
