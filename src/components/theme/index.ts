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
      bgColor: mode("#edf2f7", "#212121")(props),
      color: mode("#1a202c", "#fefefe")(props),
    },
  }),
};

const theme = extendTheme(
  {
    semanticTokens: {
      colors: {},
    },
    colors: {
      ...baseTheme.colors,
    },
    styles: myStyles,
    config: myConfig,
    fonts: {
      heading: `"Inter", sans-serif`,
      body: `"Source Sans Pro", sans-serif`,
      // mono: `"Noto Sans", sans-serif`,
    },
  },
  withDefaultColorScheme({
    colorScheme: "gray",
  })
);

export default theme;

export { theme };
