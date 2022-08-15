import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppType, AppPropsType } from "next/dist/shared/lib/utils";
import React, { useState } from "react";

import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import type { QueryClientConfig } from "@tanstack/react-query";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "../lib/seoConfig";
import { Layout } from "../components/";

import "@fontsource/inter";
import "@fontsource/source-sans-pro";

const defQOpts: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    },
  },
};

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsType) => {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient(defQOpts));

  return (
    <React.StrictMode>
      <DefaultSeo {...SEOConfig} />
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout title={Component.displayName}>
              <Component key={router.asPath} {...pageProps} />
            </Layout>
          </Hydrate>
        </SessionProvider>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default MyApp;
