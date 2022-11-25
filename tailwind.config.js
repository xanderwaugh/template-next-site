/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        body: ["var(--font-poppins)"],
      },
      colors: {
        brand: "#202945",
      },
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
