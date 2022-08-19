import React, { ReactNode } from "react";
import { Navbar, Footer } from "..";
import styles from "styles/Layout/Layout.module.css";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Navbar />
      <main className={styles["layout"]}>{children}</main>
      <Footer />
    </ChakraProvider>
  );
};

export { Layout };
