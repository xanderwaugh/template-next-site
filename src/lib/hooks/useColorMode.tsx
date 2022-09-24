import React, { createContext, useContext, useEffect, useState } from "react";

export type ColorMode = "light" | "dark";

type ContextProps = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void | undefined;
};

const ColorModeContext = createContext<ContextProps>({
  colorMode: "light",
  setColorMode: () => undefined,
});

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);
  return { colorMode, setColorMode };
};

type ProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const getLocalStorage = () => {
  if (typeof window === "undefined") return "light";
  const colorMode = localStorage.getItem("colorMode");
  if (colorMode) {
    return colorMode as ColorMode;
  }
  return "light";
};

const setLocalStorage = (newCM: ColorMode) => {
  try {
    localStorage.setItem("colorMode", newCM);
  } catch (err) {
    console.log("err");
  }
};

export const ColorModeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>("light");

  useEffect(() => {
    const localColorMode = getLocalStorage();
    setColorMode(localColorMode);
  }, []);

  useEffect(() => {
    setLocalStorage(colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
