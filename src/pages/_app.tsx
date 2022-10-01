import "~/styles/globals.css";
import React, { StrictMode } from "react";
import { AppProps, AppType } from "next/app";
import { useRouter } from "next/router";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "~/utils/seoConfig";

const MyApp = (({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <StrictMode>
      <DefaultSeo {...SEOConfig} />
      <Component key={router.asPath} {...pageProps} />
    </StrictMode>
  );
}) as AppType;

export default MyApp;
