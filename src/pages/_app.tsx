import "../styles/globals.css";
import React from "react";
import { useRouter } from "next/router";
import type { AppPropsWithLayout } from "types/layout";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "../lib/seoConfig";

import { ChakraProvider } from "@chakra-ui/react";
import { Layout, theme } from "../components/";

const MyApp = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <React.StrictMode>
      <DefaultSeo {...SEOConfig} />
      <ChakraProvider theme={theme} resetCSS={true}>
        <Layout title={Component.displayName}>
          {getLayout(
            <Component key={router.asPath} {...pageProps} />
          )}
        </Layout>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default MyApp;
