import React, { useEffect, useRef } from "react";
import styles from "styles/Layout/Navbar.module.css";
import { NAV_ITEMS, NavItemProps } from "lib";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { StyledLink, ColorModeSwitch } from "..";
import { useMediaQuery } from "lib/hooks";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  useDisclosure,
  useColorMode,
  PopoverTrigger,
  ColorMode,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { colorMode } = useColorMode();

  return (
    <header>
      <nav
        role={"navigation"}
        style={{
          zIndex: 10,
          position: "fixed",
          backgroundColor:
            colorMode === "light" ? "#fff" : "#121212",
          color: colorMode === "light" ? "black" : "white",
          borderBottom:
            colorMode === "light"
              ? "1px solid #171923"
              : "1px solid #E2E8F0",
          boxShadow:
            "0px 0px 12px -1px rgba(0, 0, 0, 0.35)",
        }}
        className={styles["nav-container"]}
      >
        {isDesktop ? <DesktopNav /> : <MobileNav />}

        <div>
          <ColorModeSwitch />
        </div>
      </nav>
    </header>
  );
};

export { Navbar };

const DesktopNav: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.desktopNav}>
      <span className={`${styles["nav-title"]} Header`}>
        Apex Stats
      </span>
      {NAV_ITEMS.map((nav_item) => (
        <DesktopNavItem
          key={`${nav_item.href}-nav`}
          colorMode={colorMode}
          {...nav_item}
        />
      ))}
    </div>
  );
};

type DesktopNavItemProps = NavItemProps & {
  colorMode: ColorMode;
};
const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  href,
  label,
  children,
  colorMode,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, []);

  return (
    <Popover
      isOpen={children ? isOpen : false}
      onOpen={onOpen}
      onClose={onClose}
      trigger={children ? "hover" : "click"}
      placement={"bottom"}
      isLazy
    >
      <PopoverTrigger>
        <div className={"Header"}>
          <StyledLink href={href}>{label}</StyledLink>
        </div>
      </PopoverTrigger>
      <PopoverContent
        zIndex={4}
        width={"16rem"}
        bgColor={
          colorMode === "light" ? "#fefefe" : "#212121"
        }
      >
        <PopoverHeader>{label}</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <VStack align={"start"}>
            {children &&
              children.map((child) => (
                <StyledLink
                  key={`${child.label}-popover`}
                  href={child.href}
                >
                  <Box
                    w={"100%"}
                    cursor={"pointer"}
                    _hover={{
                      bg:
                        colorMode === "light"
                          ? "rgb(240, 240, 240)"
                          : "#424242",
                      textDecoration: "underline",
                    }}
                    p={2}
                    px={4}
                    rounded={"lg"}
                  >
                    {child.label}
                    <Text
                      style={{
                        textIndent: "1rem",
                      }}
                      textDecor={"none"}
                    >
                      {child.subLabel}{" "}
                    </Text>
                  </Box>
                </StyledLink>
              ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const MobileNav: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.mobileNav}>
      <Button ref={btnRef} onClick={onOpen}>
        {isOpen ? (
          <AiOutlineClose size={20} />
        ) : (
          <BiMenu size={20} />
        )}
      </Button>
      <span className={`${styles["nav-title"]} Header`}>
        Apex Stats
      </span>
      <div />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="top"
      >
        <DrawerOverlay />
        <DrawerContent display={"flex"}>
          <div
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <DrawerCloseButton size={"lg"} />
          </div>
          <DrawerHeader className={"Header"}>
            LINKS
          </DrawerHeader>

          <DrawerBody className={styles.mobileNavItems}>
            {NAV_ITEMS.map((nav_item) => (
              <MobileNavItem
                key={`${nav_item.href}-nav`}
                {...nav_item}
              />
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              onClick={onClose}
              bottom={0}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({
  href,
  label,
}) => {
  return (
    <div className={`${styles.mobileNavItem} Header`}>
      <StyledLink href={href}>{label}</StyledLink>
    </div>
  );
};
