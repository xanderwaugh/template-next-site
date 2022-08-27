import React, { ReactNode } from "react";
import { Navbar, Footer } from "..";
// import styles from "styles/Layout/Layout.module.css";

import { ChakraProvider, chakra } from "@chakra-ui/react";

import { theme } from "../theme";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Navbar />
      <chakra.main
        // className={styles["layout"]}
        pt={"72px"}
        minHeight={"90vh"}
        // px={"1.5rem"}
      >
        {children}
      </chakra.main>
      <Footer />
    </ChakraProvider>
  );
};

export { Layout };
