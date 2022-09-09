import React from "react";
import styles from "styles/Layout/Footer.module.css";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { StyledLink, Colors } from "components";
import { useMediaQuery } from "lib/hooks";

// * Footer Large with Logo Left Follow Us
const Footer: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <footer>
      <chakra.div
        className={styles["footer-container"]}
        bg={colorMode === "light" ? "gray.50" : "gray.900"}
        color={
          colorMode === "light" ? "gray.700" : "gray.200"
        }
      >
        <chakra.div maxW={"5xl"} mx={"auto"} py={10}>
          <chakra.div
            display={"grid"}
            gridTemplateColumns={{
              lg: "2fr 1fr 1fr 2fr",
              md: "1fr 1fr",
              sm: "1fr",
              base: "1fr",
            }}
            gap={isDesktop ? "4rem" : "2rem"}
            mx={"4rem"}
          >
            <chakra.div
              display={"flex"}
              flexDirection={"column"}
              gap={6}
            >
              <chakra.span
                className={`${styles["footer-brand"]} Header`}
              >
                web dev
              </chakra.span>
              <chakra.p fontSize={"sm"}>
                © 2022 Xander Waugh. All rights reserved
              </chakra.p>
              <chakra.div
                display={"flex"}
                flexDirection={"row"}
                gap={6}
              >
                {/* {SocialMedias.map((socialMedia) => (
                  <SocialButton
                    key={socialMedia.label}
                    label={socialMedia.label}
                    href={socialMedia.href}
                    colorMode={colorMode}
                  >
                    {<socialMedia.icon />}
                  </SocialButton>
                ))} */}
              </chakra.div>
            </chakra.div>

            <LinkSection
              label={"Company"}
              links={[
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Testimonials", href: "#" },
              ]}
            />

            <LinkSection
              label={"Support"}
              links={[
                { label: "Help Center", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Legal", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ]}
            />

            <chakra.div
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <chakra.p
                fontWeight={"500"}
                fontSize={"lg"}
                mb={2}
              >
                Stay up to date
              </chakra.p>
              <chakra.div
                display={"flex"}
                flexDirection={"column"}
              >
                <form>
                  <FormControl
                    id={"email"}
                    isRequired={true}
                  >
                    <FormLabel htmlFor={"email"}>
                      Email
                    </FormLabel>
                    <Input
                      placeholder={"Your Email"}
                      bg={
                        colorMode === "light"
                          ? "blackAlpha.100"
                          : "whiteAlpha.100"
                      }
                      border={0}
                      _focus={{
                        bg: "whiteAlpha.300",
                      }}
                      type={"email"}
                    />
                  </FormControl>

                  <Button
                    my={".5rem"}
                    size={"md"}
                    border={"2px solid transparent"}
                    color={"white"}
                    bgColor={Colors.darkBlue}
                    _hover={{
                      bgColor: Colors.blue,
                    }}
                    _active={{
                      bgColor: Colors.babyBlue,
                      border: `2px solid ${Colors.blue}`,
                    }}
                    aria-label={"Subscribe"}
                    type={"submit"}
                  >
                    Subscribe
                  </Button>
                </form>
              </chakra.div>
            </chakra.div>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </footer>
  );
};

interface LinkSectionLinks {
  label: string;
  links: {
    label: string;
    href: string;
  }[];
}

const LinkSection: React.FC<LinkSectionLinks> = ({
  label,
  links,
}) => {
  return (
    <chakra.div
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
    >
      <chakra.p fontWeight={"500"} fontSize={"lg"} mb={2}>
        {label}
      </chakra.p>

      {links.map((link) => (
        <StyledLink key={link.label} href={link.href}>
          {link.label}
        </StyledLink>
      ))}
    </chakra.div>
  );
};

export { Footer };

// interface SocialButtonProps {
//   label: string;
//   href: string;
//   colorMode: "light" | "dark";
//   children: ReactNode;
// }
// const SocialButton: React.FC<SocialButtonProps> = ({
//   label,
//   colorMode,
//   href,
//   children,
// }) => {
//   return (
//     <StyledLink href={href}>
//       <chakra.a target={"_blank"}>
//         <chakra.button
//           w={8}
//           h={8}
//           rounded={"full"}
//           cursor={"pointer"}
//           display={"inline-flex"}
//           alignItems={"center"}
//           justifyContent={"center"}
//           transition={"background 0.3s ease"}
//           bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
//           _hover={{
//             bg:
//               colorMode === "light" ? "blackAlpha.200" : "whiteAlpha.200",
//           }}
//         >
//           <VisuallyHidden>{label}</VisuallyHidden>
//           {children}
//         </chakra.button>
//       </chakra.a>
//     </StyledLink>
//   );
// };
