import React from "react";
import { NextPage } from "next";

import Head from "next/head";
import { Header, Hero } from "~/components";

const IndexPage: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Template Site</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section
        id="contact"
        className="snap-center h-screen flex flex-col items-center justify-center"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor, eget
          aliquam nisl nisl sit amet nisl. Nulla facilisi.
        </p>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default IndexPage;
