import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyles, mode } from "@chakra-ui/theme-tools";
import { Colors } from "./colors";

const myConfig: ThemeConfig = {
  initialColorMode: "light", // "light", "dark", "system"
};

const myStyles: GlobalStyles = {
  global: (props) => ({
    body: {
      bgColor: mode("#edf2f7", "#212121")(props),
      color: mode("#0e0e0e", "#fefefe")(props),
    },
  }),
};

const theme = extendTheme({
  config: myConfig,
  styles: myStyles,
  fonts: {
    heading: `"Noto Sans", sans-serif`,
    body: `"Noto Sans", sans-serif`,
    mono: `"Noto Sans", sans-serif`,
  },
});

export default theme;

export { theme, Colors };
