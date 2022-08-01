import React from "react";
import {
  Container,
  useColorMode,
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  HStack,
  SimpleGrid,
  ColorProps,
  chakra,
  Kbd,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { StyledLink } from "../StyledLink";
import { NAV_ITEMS, socialMedias } from "../../lib";
import { useBreakpointValue } from "@chakra-ui/react";
import {
  FaDev,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

// * Footer Large with Logo Left Follow Us
const Footer: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box pb={4}>
      <Container
        as="footer"
        role="contentinfo"
        maxW="6xl"
        color={
          colorMode === "light" ? "gray.700" : "gray.200"
        }
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: `repeat(${NAV_ITEMS.length + 1}, 1fr)`,
            lg: `repeat(${NAV_ITEMS.length + 1}, 1fr)`,
          }}
          spacing={8}
          py="48px"
          px="24px"
          justifyItems={"center"}
          alignContent={"center"}
          alignItems={"flex-start"}
        >
          <Stack justify={"space-between"} spacing={6}>
            <HStack>
              <Text
                // fontFamily={"Copperplate Gothic"}
                fontFamily={"heading"}
                fontWeight={"semibold"}
                fontSize={"lg"}
              >
                Company Name
              </Text>
              {/* <Image
                src={"/logo.png"}
                alt={"Footer Logo"}
                w={"48px"}
                h={"48px"}
              /> */}
              <BsFillLightningChargeFill size={24} />
            </HStack>
            <Text fontSize={"sm"}>
              &copy; {new Date().getFullYear()} Company
              Name, LLC.
              {useBreakpointValue({
                base: " ",
                sm: " ",
                md: " ",
                lg: <br />,
              })}
              All rights reserved.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <ButtonGroup variant="ghost">
                {socialMedias.map((elem) => (
                  <SMButton
                    key={`${elem.title}-footer`}
                    title={elem.title}
                    href={elem.href}
                    color={elem.color}
                    MyIcon={elem.icon}
                  />
                ))}
              </ButtonGroup>
            </Stack>
          </Stack>
          {NAV_ITEMS.map((navItem) => (
            <Stack
              w={"100%"}
              align={"flex-start"}
              justify={"flex-start"}
              key={`${navItem.label}-footer-container`}
            >
              <StyledLink
                href={navItem.href}
                label={navItem.label}
                fontWeight={"500"}
                fontSize={"lg"}
                textDecor={"underline"}
              />
              {navItem.children &&
                navItem.children.map((navItemChild) => (
                  <StyledLink
                    key={`footer-link-for-${navItemChild.label}`}
                    href={navItemChild.href}
                    label={navItemChild.label}
                  />
                ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
      <Stack
        direction={{
          lg: "row",
          md: "row",
          sm: "column",
          base: "column",
        }}
        w={"full"}
        justify={"center"}
        align={"center"}
        fontSize={"xl"}
      >
        <span>
          <Kbd>
            Website Designed By{" "}
            <chakra.span textDecor={"underline"}>
              Xander Waugh
            </chakra.span>
          </Kbd>
        </span>
        <HStack spacing={4}>
          <StyledLink
            href="https://www.linkedin.com/in/xander-waugh-44b50022b/"
            target={"_blank"}
          >
            <FaLinkedin />
          </StyledLink>
          <StyledLink
            href={"https://github.com/xanderwaugh/"}
            target={"_blank"}
          >
            <FaGithub />
          </StyledLink>
          <StyledLink
            href={"https://dev.to/xanderwaugh/"}
            target={"_blank"}
          >
            <FaDev />
          </StyledLink>
        </HStack>
      </Stack>
    </Box>
  );
};

export { Footer };

interface ISMBTNProps {
  title: string;
  href: string;
  color?: ColorProps["color"];
  MyIcon: IconType;
}
export const SMButton: React.FC<ISMBTNProps> = ({
  title,
  href,
  color,
  MyIcon,
}) => {
  return (
    <IconButton
      as="a"
      href={href}
      title={title}
      target={"_blank"}
      aria-label={title}
      // color={colorMode === "light" ? "gray.600" : "white"}
      color={color ?? "inherit"}
      icon={<MyIcon fontSize="1.5rem" />}
    />
  );
};
