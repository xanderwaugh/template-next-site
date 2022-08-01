import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { Suspense } from "react";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "../lib/seoConfig";

import { Wrapper } from "../components/";
import "@fontsource/inter";
import "@fontsource/source-sans-pro";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const cmm =
  //   typeof pageProps.cookies === "string"
  //     ? cookieStorageManagerSSR(pageProps.cookies)
  //     : localStorageManager;

  return (
    <React.StrictMode>
      {/* <ChakraProvider
        resetCSS
        colorModeManager={colorModeManager}
        theme={theme}
      > */}
        <DefaultSeo {...SEOConfig} />
        {Component.displayName && (
          <Head>
            <title>{Component.displayName}</title>
          </Head>
        )}
        <Wrapper>
          <Suspense fallback={null}>
            <Component {...pageProps} />
          </Suspense>
        </Wrapper>
      {/* </ChakraProvider> */}
    </React.StrictMode>
  );
};

export default MyApp;