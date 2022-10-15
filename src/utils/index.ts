export interface NavItemProps {
  label: string;
  href: string;
  sub?: string;
  children?: Array<NavItemProps>;
}

export const NAV_ITEMS: Array<NavItemProps> = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Work", href: "/work/" },
  { label: "Contact", href: "/contact/" },
];

// * Util Functions
export const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  return `http://localhost:${process.env.PORT ?? 3000}`; // Assume Localhost
};

// * Util Hooks
export { useFavicon } from "./hooks/useFavicon";
export { useMediaQuery } from "./hooks/useMediaQuery";
export { useWindowDimensions } from "./hooks/useWindowDimensions";
