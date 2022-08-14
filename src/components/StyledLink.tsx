import React, { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

interface StyledLinkProps extends LinkProps {
  href: string;
  children?: ReactNode;
  className?: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  href,
  children,
  className = "",
  ...props
}: StyledLinkProps) => {
  return (
    <NextLink href={href} className={className} passHref {...props}>
      {children}
    </NextLink>
  );
};

export { StyledLink };
