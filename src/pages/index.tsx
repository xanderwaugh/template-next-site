import React from "react";
import type { NextPageWithLayout } from "types/layout";
import { Box, Button, Heading } from "@chakra-ui/react";
import Colors from "../../public/colors.jpeg";
import { StyledImage } from "components";

const IndexPage: NextPageWithLayout = () => {
  return (
    <Box className={"pageContainer"}>
      <StyledImage src={Colors} alt={"Colored Image"} />

      <Heading as={"h1"} size={"2xl"}>
        Content
      </Heading>
      <Heading as={"h2"} size={"xl"}>
        More Content
      </Heading>
      <Button size={"lg"}>HERO Button</Button>
    </Box>
  );
};

IndexPage.getLayout = (page) => (
  <div>
    <Box>{page}</Box>
  </div>
);
IndexPage.displayName = "Home";

export default IndexPage;
