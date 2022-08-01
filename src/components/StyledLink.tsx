/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";

interface StyledLinkProps extends LinkProps {
  href: string;
  label?: string;
  children?: ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  href,
  label,
  children,
  ...props
}: StyledLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link {...(props as any)}>
        {label}
        {children}
      </Link>
    </NextLink>
  );
};

export { StyledLink };
