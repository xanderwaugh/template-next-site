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
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
  StackDivider,
  DrawerFooter,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Session

  return (
    <header>
      <chakra.nav
        role={"navigation"}
        className={styles["nav-container"]}
        backgroundColor={colorMode === "light" ? "#fff" : "#121212"}
        color={colorMode === "light" ? "black" : "white"}
        borderBottom={
          colorMode === "light"
            ? "1px solid #171923"
            : "1px solid #E2E8F0"
        }
        // base, sm, md, lg, xl
        // px={["1rem", "1rem", "1rem", "1rem", "12rem"]}
        px={"1rem"}
      >
        {/* Nav Content */}
        <GridItem justifySelf={"left"}>
          {isDesktop ? <DesktopNav /> : <MobileNav />}
        </GridItem>

        {/* Title */}
        <GridItem justifySelf={"center"} textAlign={"center"}>
          <StyledLink href={"/"}>
            <chakra.a>
              <chakra.span className={`${styles["nav-title"]} Header`}>
                {isDesktop && <BsKeyboard size={20} />}
                Sticky Keys
              </chakra.span>
            </chakra.a>
          </StyledLink>
        </GridItem>

        {/* Account Stuff */}
        <GridItem
          justifySelf={"right"}
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"right"}
          w={"100%"}
          gap={".5rem"}
        >
          <StyledLink href={"/account/"}>
            <chakra.a>
              <Button
                variant={"ghost"}
                onClick={() => {
                  //
                }}
                display={"flex"}
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"right"}
                gap={".5rem"}
              >
                <FaUserCircle size={"36px"} />
                <AiFillCaretDown size={14} />
              </Button>
            </chakra.a>
          </StyledLink>
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
          <chakra.a mr={"2rem"}>{nav_item.label}</chakra.a>
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
        <BiMenu size={20} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        closeOnEsc={true}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            mt={".2rem"}
            className={`${styles["nav-title"]} Header`}
          >
            <BsKeyboard size={20} />
            Sticky Keys
          </DrawerHeader>
          <DrawerCloseButton mt={".6rem"} />

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
              justify={"left"}
              divider={<StackDivider />}
              w={"100%"}
            >
              <StackDivider w={"100%"} />
              <chakra.div
                display={"flex"}
                flexDir={"row"}
                justifyContent={"space-between"}
              >
                <chakra.div w={"100%"}>
                  Sticky Keys is a project by
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
                <ColorModeSwitch />
              </chakra.div>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
