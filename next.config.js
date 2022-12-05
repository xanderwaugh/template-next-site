// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Define NextJS Config With Auto Completion.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = getConfig({
  images: { domains: [], formats: ["image/avif", "image/webp"] },
  i18n: { locales: ["en-US"], defaultLocale: "en-US" },
  poweredByHeader: false,
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
});
