import React, { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

interface StyledLinkProps extends LinkProps {
  href: string;
  children?: ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  href,
  children,
  ...props
}: StyledLinkProps) => {
  return (
    <NextLink href={href} passHref {...props}>
      {children}
    </NextLink>
  );
};

export { StyledLink };
