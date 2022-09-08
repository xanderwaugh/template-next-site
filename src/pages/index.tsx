import { NextPage } from "next";
import React from "react";
import { Button, chakra, Heading } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <div className={"pageContainer"}>
      {/* // * Landing Page Section */}
      <Heading as={"h1"} size={"2xl"}>
        Content
      </Heading>
      <Heading as={"h2"} size={"xl"}>
        {/* {data?.greeting ?? "no greeitng"} */}
        More Content
      </Heading>
      <Button size={"lg"}>HERO Button</Button>
    </div>
  );
};

IndexPage.displayName = "site home";

export default IndexPage;
