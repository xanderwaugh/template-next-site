import React from "react";
import {
  chakra,
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { NAV_ITEMS, NavItemProps } from "../../lib";
import { StyledLink, ColorModeSwitch } from "../";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  // const [isMobile] = useMediaQuery("(max-width: 992px)");
  // NAVBAR is 60px

  return (
    <chakra.nav role={"navigation"}>
      <Flex
        bg={"navbar"}
        color={"navbarLinkHover"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue(
          "gray.200",
          "gray.900"
        )}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{
            base: 1,
          }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <StyledLink
            href={"/"}
            display={"flex"}
            flexDirection={"row"}
          >
            <HStack
              h={"100%"}
              align={"center"}
              justify={"center"}
            >
              {/* <StyledImage
                display={{
                  lg: "inline-block",
                  sm: "none",
                  base: "none",
                }}
                src={"/favicon.ico"}
                alt={"nav logo"}
                width={"36px"}
                height={"36px"}
              /> */}
              <Text
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                fontFamily={"heading"}
                color={"navbarTitle"}
                fontSize={"1.25rem"}
                wordBreak={"keep-all"}
                w={"100%"}
              >
                Company Title
              </Text>
            </HStack>
          </StyledLink>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ColorModeSwitch />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav mobileNavToggle={onToggle} />
      </Collapse>
    </chakra.nav>
  );
};

export { Navbar };

const DesktopNav: React.FC = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
          >
            <PopoverTrigger>
              <Box
                aria-label={`${navItem.label} Navbar Link`}
              >
                <StyledLink
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={"navbarLink"}
                  _hover={{
                    textDecoration: "none",
                    color: "navbarLinkHover",
                  }}
                >
                  {navItem.label}
                </StyledLink>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"navDropMenu"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav: React.FC<NavItemProps> = ({
  label,
  href,
  subLabel,
}: NavItemProps) => {
  return (
    <StyledLink
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: "navbarDropMenuHover",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "navbarHoverAccent" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{
            opacity: "100%",
            transform: "translateX(0)",
          }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={"navbarHoverAccent"}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </StyledLink>
  );
};

interface MobileNavProps {
  mobileNavToggle(): void;
}
const MobileNav: React.FC<MobileNavProps> = ({
  mobileNavToggle,
}) => {
  return (
    <Stack
      bg={"navDropMenu"}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          mobileNavToggle={mobileNavToggle}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

interface MobileNavItemProps extends NavItemProps {
  mobileNavToggle(): void;
}
const MobileNavItem: React.FC<MobileNavItemProps> = ({
  label,
  children,
  href,
  mobileNavToggle,
}: MobileNavItemProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={children ? onToggle : mobileNavToggle}
    >
      <Flex
        as={children ? Flex : StyledLink}
        href={children ? "" : href}
        // py={2}
        pt={2}
        pb={isOpen ? 0 : 2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"navbarLink"}>
          {label}
        </Text>
        {children && (
          <Icon
            color={"navbarLink"}
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"navbarLink"}
          align={"start"}
          onClick={mobileNavToggle}
        >
          {children &&
            children.map((child) => (
              <StyledLink
                key={child.label}
                py={1}
                href={child.href}
                color={"navbarLink"}
              >
                {child.label}
              </StyledLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
