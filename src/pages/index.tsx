import { NextPage } from "next";
import {
  Button,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Heading textAlign={"center"}>Home Page</Heading>
      <HStack spacing={2}>
        <Button colorScheme={"facebook"}>Increase</Button>
        <Button colorScheme={"red"}>Decrease</Button>
      </HStack>
      <Text fontSize={"3xl"}>{"test"}</Text>
      {/* {loading ? (
        "Loading..."
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )} */}
    </div>
  );
};

IndexPage.displayName = "Home Page Title";

export default IndexPage;
