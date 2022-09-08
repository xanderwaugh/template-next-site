import React, { ReactNode } from "react";
import { Navbar, Footer } from "..";
import { SEOConfig } from "lib/seoConfig";
import Head from "next/head";
import { chakra } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = SEOConfig.defaultTitle,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <chakra.main pt={"64px"}>{children}</chakra.main>
      <Footer />
    </>
  );
};

export { Layout };
