export interface NavItemProps {
  label: string;
  href: string;
  subLabel?: string;
  children?: Array<NavItemProps>;
}

export const NAV_ITEMS: Array<NavItemProps> = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
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

export const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};
