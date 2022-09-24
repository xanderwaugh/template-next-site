import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { Colors } from "./colors";

const myConfig: ThemeConfig = {
  initialColorMode: "light", // "light", "dark", "system"
  useSystemColorMode: false,
  disableTransitionOnChange: true,
  cssVarPrefix: "styles",
};

const breakpoints = {
  sm: "30em", // * 480px
  md: "48em", // * 768px
  lg: "62em", // * 992px
  xl: "80em", // * 1280px
};

const theme = extendTheme(
  {
    config: myConfig,
    fonts: {
      heading: `"Noto Sans", sans-serif`,
      body: `"Noto Sans", sans-serif`,
      mono: `"Noto Sans", sans-serif`,
    },
    breakpoints: breakpoints,
  },
  withDefaultColorScheme({
    colorScheme: "teal",
  }),
);

export default theme;
export { theme, Colors };
