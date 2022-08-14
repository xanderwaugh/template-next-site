import Head from "next/head";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <header>
        <div
          style={{
            height: "72px",
            backgroundColor: "gray",
          }}
        >
          <h1>Navbar</h1>
        </div>
      </header>
      {/* <Navbar /> */}

      <main
        style={{
          paddingTop: "72px",
          paddingLeft: "24px",
          paddingRight: "24px",
          minHeight: "90vh",
        }}
      >
        {children}
      </main>
      <footer>footer</footer>
      {/* <Footer /> */}
    </>
  );
};

export { Layout };
