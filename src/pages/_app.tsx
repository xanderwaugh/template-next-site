import "../styles/globals.css";
import React, { StrictMode } from "react";
import { AppProps, AppType } from "next/app";
import { useRouter } from "next/router";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "../lib/seoConfig";

import { ChakraProvider } from "@chakra-ui/react";
import { Layout, theme } from "../components/";

const MyApp = (({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <StrictMode>
      <DefaultSeo {...SEOConfig} />
      <ChakraProvider theme={theme} resetCSS={true}>
        <Layout title={Component.displayName}>
          <Component key={router.asPath} {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StrictMode>
  );
}) as AppType;

export default MyApp;
