import React from "react";
import NextImage, { ImageProps } from "next/image";

interface StyledImageProps extends ImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}

const StyledImage: React.FC<StyledImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <NextImage
      style={{
        position: "relative",
      }}
      objectFit={"cover"}
      // layout={"fill"}
      // layout={"responsive"}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

export { StyledImage };
