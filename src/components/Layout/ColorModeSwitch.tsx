import React from "react";
import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ColorModeSwitch: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      aria-label={"Toggle Contrast"}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? (
        <BiMoon size={20} />
      ) : (
        <ImSun size={20} />
      )}
    </Button>
  );
};

export { ColorModeSwitch };
