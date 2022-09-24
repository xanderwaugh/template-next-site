import React from "react";

import FutureImage, { StaticImageData, ImageProps } from "next/future/image";

interface StyledImageProps extends ImageProps {
  src: string | StaticImageData;
  alt: string;
}

const StyledImage: React.FC<StyledImageProps> = ({ src, alt, ...props }) => {
  return (
    <div>
      <FutureImage
        src={src}
        alt={alt}
        placeholder={"blur"}
        blurDataURL={"/assets/placeholder.png"}
        draggable={true}
        loading={"lazy"}
        {...props}
      />
    </div>
  );
};

export { StyledImage };
