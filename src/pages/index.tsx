import React from "react";
import { NextPage } from "next";

import { NextSeo } from "next-seo";

import { Header, Hero } from "~/components";

const IndexPage: NextPage = () => {
  return (
    <div className="page">
      <NextSeo title="ClinFinder" canonical="http://localhost:3000/" />

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
