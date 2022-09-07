import React from "react";
import NextImage, { ImageProps, StaticImageData } from "next/image";

interface StyledImageProps {
  src: string | StaticImageData;
  alt: string;
  imageProps?: ImageProps;
}

const StyledImage: React.FC<StyledImageProps> = ({
  src,
  alt,
  imageProps,
}) => {
  return (
    <div
      style={{
        margin: "auto auto",
        width: "100%",
        height: "100%",
        display: "grid",
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        layout={"responsive"}
        objectFit={"contain"}
        objectPosition={"center"}
        width={typeof src === "string" ? "100%" : src.width}
        height={typeof src === "string" ? "100%" : src.height}
        placeholder={"empty"}
        loading={"lazy"}
        // blurDataURL={"/placeholder.png"}
        {...imageProps}
      />
    </div>
  );
};

export { StyledImage };
