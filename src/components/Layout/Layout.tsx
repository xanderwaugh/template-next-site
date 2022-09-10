import { ReactNode } from "react";

import Head from "next/head";
import { SEOConfig } from "lib/seoConfig";

import { Box } from "@chakra-ui/react";
import { Navbar } from ".";

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
      <Box as={"main"} pt={"64px"}>
        {children}
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export { Layout };
