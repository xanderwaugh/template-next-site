const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // { key: "X-Content-Type-Options", value: "nosniff" },
  // { key: "Cache-Control", value: "public, max-age=2678000, immutable", },
  // 31536000 = 365 days, 2678000 = 31 days
];

/** @type {import("next").NextConfig } */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "source.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
  // async headers() {
  //   return [{ source: "/:path*", headers: securityHeaders }];
  // },
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  swcMinify: true,
  optimizeFonts: false,
};

module.exports = nextConfig;
