import "~/styles/globals.css";
import React, { StrictMode } from "react";
import { AppProps, AppType } from "next/app";

import { trpc } from "~/server";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "~/utils/seoConfig";

import { Poppins } from "@next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const MyApp = (({ Component, pageProps, router }: AppProps) => {
  return (
    <StrictMode>
      <DefaultSeo {...SEOConfig} />
      <main className={poppins.className}>
        <Component key={router.asPath} {...pageProps} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          pauseOnFocusLoss={false}
          draggable={false}
          theme="dark"
          toastStyle={{
            fontFamily: "Poppins",
          }}
        />
      </main>
    </StrictMode>
  );
}) as AppType;

// export default MyApp;
export default trpc.withTRPC(MyApp);
