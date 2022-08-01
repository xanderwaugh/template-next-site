/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */
const {
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // { key: "X-Content-Type-Options", value: "nosniff" },
  // { key: "Cache-Control", value: "public, max-age=2678000, immutable", },
  // 31536000 = 365 days, 2678000 = 31 days
];

/*
 * Next Config Options
 * @typedef NextConfig
 */
module.exports = async () => {
  // * DEV OPTIONS
  return {
    poweredByHeader: false,
    trailingSlash: true,
    images: {
      domains: [
        "heightenedexpo.s3.amazonaws.com",
        "d24dg2ixwger2q.cloudfront.net",
      ],
    },
    async headers() {
      return [
        { source: "/:path*", headers: securityHeaders },
      ];
    },
    // ? experimental
    swcMinify: true,
  };
};
