import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import { Colors } from "./colors";
// import { GlobalStyles, mode } from "@chakra-ui/theme-tools";

// * https://github.com/TylerAPfledderer/chakra-ui-typescale
import { withTypeScale } from "@tylerapfledderer/chakra-ui-typescale";

const myConfig: ThemeConfig = {
  initialColorMode: "light", // "light", "dark", "system"
  useSystemColorMode: false,
  disableTransitionOnChange: true,
  cssVarPrefix: "styles",
};

// const myStyles: GlobalStyles = {
//   global: (props) => ({
//     body: {
//       bgColor: mode("#edf2f7", "#212121")(props),
//       color: mode("#0e0e0e", "#fefefe")(props),
//     },
//   }),
// };

const theme = extendTheme(
  {
    config: myConfig,
    fonts: {
      heading: `"Noto Sans", sans-serif`,
      body: `"Noto Sans", sans-serif`,
      mono: `"Noto Sans", sans-serif`,
    },
  },
  withTypeScale({
    scale: 1.6,
  }),
  withDefaultColorScheme({
    colorScheme: "teal",
  }),
  baseTheme
);

export default theme;
export { theme, Colors };
