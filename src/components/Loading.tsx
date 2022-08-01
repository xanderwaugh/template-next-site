import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";

const Loading: React.FC = () => {
  return (
    <Box minH="100%">
      <Skeleton w="100%" h="100%" />
    </Box>
  );
};

export { Loading };
