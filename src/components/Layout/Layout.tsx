import React, { ReactNode } from "react";
import { Navbar, Footer } from "..";
import { SEOConfig } from "lib/seoConfig";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../theme";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = SEOConfig.defaultTitle,
}) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main
        style={{
          paddingTop: "64px",
        }}
      >
        {children}
      </main>
      <Footer />
    </ChakraProvider>
  );
};

export { Layout };
