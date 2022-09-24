import React from "react";
import { NextPage } from "next";

import { Box, Button } from "@chakra-ui/react";
import { StyledImage } from "components";

import Colors from "../../public/colors.jpeg";

const IndexPage: NextPage = () => {
  return (
    <Box className={"pageContainer"}>
      <StyledImage src={Colors} alt={"Colored Image"} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
        nisl eget aliquam tincidunt, nisl nisl aliquam tortor, eget aliquam nisl
        nisl sit amet nisl. Nulla facilisi.
      </p>

      <Button size={"lg"}>HERO Button</Button>
    </Box>
  );
};

export default IndexPage;
