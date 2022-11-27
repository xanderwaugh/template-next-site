import React from "react";
import { NextPage } from "next";

import { NextSeo } from "next-seo";

import { Header, Hero } from "~/components";

const IndexPage: NextPage = () => {
  return (
    <div className="page">
      <NextSeo title="Example Title" canonical="http://localhost:3000/" />

      <Header />

      <section id="hero">
        <Hero />
      </section>
    </div>
  );
};

export default IndexPage;
