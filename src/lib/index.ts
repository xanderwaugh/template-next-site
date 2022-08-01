import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export interface NavItemProps {
  label: string;
  href: string;
  subLabel?: string;
  children?: Array<NavItemProps>;
}

export const NAV_ITEMS: Array<NavItemProps> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    children: [
      {
        label: "Who",
        subLabel: "Who we Are",
        href: "/about/#who",
      },
      {
        label: "Where",
        subLabel: "Where am I located?",
        href: "/about/#where",
      },
      {
        label: "Why",
        subLabel: "Professional Drones",
        href: "/about/#why",
      },
    ],
    href: "/about/",
  },
  {
    label: "Work",
    children: [
      {
        label: "Service #1",
        subLabel: "A Service Desc",
        href: "/work/#1",
      },
      {
        label: "Service #2",
        subLabel: "A Service Desc",
        href: "/work/#2",
      },
    ],
    href: "/work/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

export const socialMedias = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebook,
    color: "facebook.500",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    color: "facebook.500",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
    color: "linkedin.700",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
    color: "red.500",
  },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};
