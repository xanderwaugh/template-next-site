import React, { useEffect, useRef } from "react";
import styles from "styles/Layout/Navbar.module.css";
import { NAV_ITEMS } from "lib";
import { StyledLink, ColorModeSwitch } from "..";
import { useMediaQuery } from "lib/hooks";
import {
  Button,
  useColorMode,
  chakra,
  GridItem,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
  StackDivider,
  DrawerFooter,
  useBreakpoint,
} from "@chakra-ui/react";
import { BiMenu, BiX } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";

export const navbarButtonSizes: IconBaseProps["size"] = "28px";

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const breakPoint = useBreakpoint();

  return (
    <header>
      <chakra.nav
        role={"navigation"}
        className={styles["nav-container"]}
        backgroundColor={colorMode === "light" ? "#fff" : "#121212"}
        color={colorMode === "light" ? "black" : "white"}
        pl={"1rem"}
        pr={isDesktop ? "5rem" : "1rem"}
      >
        {/* // * Site Title */}
        <GridItem justifySelf={"left"} textAlign={"center"}>
          <StyledLink href={"/"}>
            <chakra.a>
              <chakra.span className={`${styles["nav-title"]} Header`}>
                website-{breakPoint}
              </chakra.span>
            </chakra.a>
          </StyledLink>
        </GridItem>

        {/* // * Nav Content */}
        <GridItem
          justifySelf={isDesktop ? "center" : "right"}
          colStart={3}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {isDesktop ? <DesktopNav /> : <MobileNav />}
          {isDesktop && <ColorModeSwitch />}
        </GridItem>
      </chakra.nav>
    </header>
  );
};

export { Navbar };

const DesktopNav: React.FC = () => {
  return (
    <>
      {NAV_ITEMS.map((nav_item) => (
        <StyledLink href={nav_item.href} key={nav_item.href}>
          <chakra.a
            // * Desktop Navbar Item Spacing
            mx={"3rem"}
          >
            {nav_item.label}
          </chakra.a>
        </StyledLink>
      ))}
    </>
  );
};

const MobileNav: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button
        aria-label={"Expand Navigation Menu"}
        ref={btnRef}
        onClick={onOpen}
        variant={"ghost"}
        colorScheme={colorMode === "light" ? "blackAlpha" : undefined}
        color={colorMode === "light" ? "black" : "white"}
      >
        <BiMenu size={navbarButtonSizes} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        closeOnEsc={true}
        isFullHeight={true}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            mt={".5rem"}
            width={"full"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ColorModeSwitch />
            <chakra.span className={`${styles["nav-title"]} Header`}>
              website
            </chakra.span>
            <Button
              aria-label={"Close Navigation Menu"}
              onClick={onClose}
              variant={"ghost"}
              colorScheme={
                colorMode === "light" ? "blackAlpha" : undefined
              }
              color={colorMode === "light" ? "black" : "white"}
            >
              <BiX size={navbarButtonSizes} />
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              justify={"left"}
              divider={<StackDivider />}
              w={"100%"}
            >
              <StackDivider w={"100%"} />
              {NAV_ITEMS.map((nav_item) => (
                <chakra.div
                  key={nav_item.href}
                  w={"100%"}
                  fontSize={"1.4rem"}
                >
                  <StyledLink href={nav_item.href}>
                    <chakra.a
                      mr={"2rem"}
                      textTransform={"uppercase"}
                      onClick={() => onClose()}
                    >
                      {nav_item.label}
                    </chakra.a>
                  </StyledLink>
                </chakra.div>
              ))}
              <StackDivider />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <VStack
              justify={"center"}
              align={"start"}
              divider={<StackDivider />}
              w={"100%"}
            >
              <StackDivider />
              <chakra.div>
                This Website Is a Project By
                <br />
                <StyledLink href="https://twitter.com/xanderwaugh">
                  <chakra.a
                    target={"_blank"}
                    color={"blue.400"}
                    display={"flex"}
                    flexDir={"row"}
                    gap={".2rem"}
                    alignItems={"center"}
                    justifyContent={"left"}
                  >
                    <FiTwitter /> @xanderwaugh
                  </chakra.a>
                </StyledLink>
              </chakra.div>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
