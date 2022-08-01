import React from "react";
import NextImage from "next/image";
import { Box, BoxProps } from "@chakra-ui/react";

interface StyledImageProps extends BoxProps {
  src: string;
  alt: string;
}

const StyledImage: React.FC<StyledImageProps> = ({
  src,
  alt,
  ...props
}) => {
  const position =
    props.pos || props.position || "relative";

  return (
    <Box
      //
      position={position}
      w={"100%"}
      h={"100%"}
      {...props}
    >
      <NextImage
        objectFit={"cover"}
        layout={"fill"}
        src={src}
        alt={alt}
      />
    </Box>
  );
};

export { StyledImage };
