import { NextSeoProps } from "next-seo/lib/types";

const companyTitle = "Company Title";
const seoDescription = "";
const siteURL = "https://www.example.com/";

export const SEOConfig: NextSeoProps = {
  defaultTitle: companyTitle,
  description: seoDescription,
  twitter: {
    cardType: "summary_large_image",
    // handle: "",
    // site: "",
  },
  openGraph: {
    url: siteURL,
    title: companyTitle,
    site_name: companyTitle,
    locale: "en_US",
    type: "website",
    description: seoDescription,
    images: [
      {
        url: "/largelogo.png",
        type: "image/png",
        alt: "Logo",
        width: 512,
        height: 512,
      },
    ],
  },
  canonical: siteURL,
  additionalMetaTags: [
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge",
    },
    {
      name: "viewport",
      content: "initial-scale=1, width=device-width",
    },
    { name: "HandheldFriendly", content: "true" },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "theme-color", content: "#ffffff" },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black",
    },
    {
      name: "apple-mobile-web-app-status-bar",
      content: "#FFF",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      sizes: "48x48",
      href: "/favicon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      sizes: "32x32",
      href: "/seo/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/seo/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      href: "/seo/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
};
