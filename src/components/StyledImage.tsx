import React from "react";

import FutureImage, {
  StaticImageData,
} from "next/future/image";

import { Box, BoxProps } from "@chakra-ui/react";

interface StyledImageProps extends BoxProps {
  src: string | StaticImageData;
  alt: string;
}

const StyledImage: React.FC<StyledImageProps> = ({
  src,
  alt,
  ...boxProps
}) => {
  const width =
    typeof src === "string" ? "100%" : src.width;
  const height =
    typeof src === "string" ? "100%" : src.height;

  return (
    <Box {...boxProps}>
      <FutureImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder={"blur"}
        blurDataURL={
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0xIDBoMjB2MjBIMXoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMTAgMTBoMTR2MTRIMTRWMTB6IiBmaWxsPSJub25lIi8+PC9zdmc+"
        }
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
        draggable={true}
        // loading={"lazy"}
        // layout={"responsive"}
      />
    </Box>
  );
};

export { StyledImage };
