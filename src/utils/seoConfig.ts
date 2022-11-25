import { NextSeoProps } from "next-seo/lib/types";

const companyTitle = "Company Title";
const seoDescription = "Company Description";
const siteURL = "https://www.example.com/";

export const SEOConfig: NextSeoProps = {
  canonical: siteURL,
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
    siteName: "Site Name",
    images: [
      {
        url: "/logo.png",
        type: "image/png",
        alt: `${companyTitle} Logo`,
        width: 512,
        height: 512,
      },
    ],
  },
  additionalMetaTags: [
    { httpEquiv: "x-ua-compatible", content: "IE=edge" },
    { name: "viewport", content: "initial-scale=1, width=device-width" },
    { name: "HandheldFriendly", content: "true" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    // { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    // { name: "apple-mobile-web-app-status-bar", content: "#FFF" },
    { name: "msapplication-TileColor", content: "#2b5797" },
    { name: "theme-color", content: "#202945" },
    // { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    // { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
  ],
  additionalLinkTags: [
    { rel: "icon", sizes: "48x48", href: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/seo/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/seo/favicon-16x16.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      sizes: "32x32",
      href: "/seo/favicon-32x32.png",
    },
    { rel: "manifest", href: "/seo/site.webmanifest" },
    { rel: "mask-icon", href: "/seo/safari-pinned-tab.svg", color: "#fb3d28" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/seo/apple-touch-icon.png",
    },
  ],
};
