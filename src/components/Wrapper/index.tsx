import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface WProps {
  children: ReactNode;
}

const Wrapper: React.FC<WProps> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main
        style={{
          marginTop: "60px",
          minHeight: "70vh",
          //
          marginLeft: "24px",
          marginRight: "24px",
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export { Wrapper };
