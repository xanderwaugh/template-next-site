import { ReactNode } from "react";

import Head from "next/head";
import { SEOConfig } from "lib/seoConfig";

import { chakra } from "@chakra-ui/react";
import { Navbar, Footer } from ".";

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
      {/* <Footer /> */}
    </>
  );
};

export { Layout };
