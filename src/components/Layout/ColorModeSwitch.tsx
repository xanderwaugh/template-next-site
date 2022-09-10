import React from "react";
import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { navbarButtonSizes } from "./Navbar";

const ColorModeSwitch: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      aria-label={"Toggle Contrast"}
      onClick={toggleColorMode}
      variant={"ghost"}
      // size={"lg"}
    >
      {colorMode === "light" ? (
        <BiMoon size={navbarButtonSizes} />
      ) : (
        <ImSun size={navbarButtonSizes} />
      )}
    </Button>
  );
};

export { ColorModeSwitch };
