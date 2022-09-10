import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../components";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head lang="en">
          <link
            rel={"preconnect"}
            href={"https://fonts.googleapis.com"}
          />
          <link
            rel={"preconnect"}
            href={"https://fonts.gstatic.com"}
            crossOrigin={"anonymous"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            type={"cookie"}
            storageKey={"color-mode"}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
