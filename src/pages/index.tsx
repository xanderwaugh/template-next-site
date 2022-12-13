import React from "react";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Hero } from "~/components";

const IndexPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Example Title" canonical="http://localhost:3000/" />

      <section id="hero">
        <Hero />
      </section>
    </>
  );
};

export default IndexPage;
