import React from "react";
import type { NextPageWithLayout } from "types/layout";
import { Box, Button } from "@chakra-ui/react";
import Colors from "../../public/colors.jpeg";
import { StyledImage } from "components";

const IndexPage: NextPageWithLayout = () => {
  return (
    <Box className={"pageContainer"}>
      <StyledImage
        src={Colors}
        alt={"Colored Image"}
        maxW={"lg"}
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed tincidunt, nisl eget aliquam tincidunt,
        nisl nisl aliquam tortor, eget aliquam nisl nisl sit
        amet nisl. Nulla facilisi.
      </p>

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
