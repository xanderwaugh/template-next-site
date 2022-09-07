import { NextPage } from "next";
import React from "react";
import { chakra } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <div className={"pageContainer"}>
      {/* // * Landing Page Section */}
      <chakra.h1 fontSize={"2rem"}>Content</chakra.h1>
      <chakra.h1 fontSize={"1.6rem"}>
        {/* {data?.greeting ?? "no greeitng"} */}
        More Content
      </chakra.h1>
    </div>
  );
};

IndexPage.displayName = "site home";

export default IndexPage;
