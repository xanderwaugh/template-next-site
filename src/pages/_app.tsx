import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppType, AppPropsType } from "next/dist/shared/lib/utils";
import React from "react";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "../lib/seoConfig";
import { Layout } from "../components/";

import "@fontsource/noto-sans";

const MyApp: AppType = ({ Component, pageProps }: AppPropsType) => {
  const router = useRouter();

  return (
    <React.StrictMode>
      <DefaultSeo {...SEOConfig} />
      <Layout title={Component.displayName}>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
};

export default MyApp;
