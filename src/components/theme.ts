import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import { GlobalStyles, mode } from "@chakra-ui/theme-tools";

const myConfig: ThemeConfig = {
  initialColorMode: "light", // "light", "dark", "system"
};

const myStyles: GlobalStyles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#121212")(props),
    },
  }),
};

// const breakpoints = createBreakpoints({
//   sm: "30em", // 480px || 600px
//   md: "48em", // 768px || 992px
//   lg: "62em", // 992px || 1024px
//   xl: "80em", // 1280px || 1024px
// });

const theme = extendTheme(
  {
    semanticTokens: {
      colors: {
        navbar: {
          default: "#fff",
          _dark: "#242424",
        },
        navbarTitle: {
          default: "gray.800",
          _dark: "white",
        },
        navDropMenu: {
          default: "#fff",
          _dark: "#202020",
        },
        navbarDropMenuHover: {
          default: "blue.50",
          _dark: "gray.900",
        },
        navbarHoverAccent: {
          default: "blue.400",
          _dark: "blue.200",
        },
        navbarLink: {
          default: "gray.600",
          _dark: "gray.200",
        },
        navbarLinkHover: {
          default: "gray.800",
          _dark: "white",
        },
      },
    },
    colors: {
      ...baseTheme.colors,
    },
    styles: myStyles,
    fonts: {
      heading: `"Inter", sans-serif`,
      body: `"Source Sans Pro", sans-serif`,
      // mono: `"Noto Sans", sans-serif`,
    },
    config: myConfig,
  },
  withDefaultColorScheme({ colorScheme: "gray" })
);

export default theme;

export { theme };
