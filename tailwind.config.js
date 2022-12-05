/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        body: ["var(--font-poppins)"],
      },
      colors: {
        black: "#0E0E0E",
        white: "#FEFEFE",
        brand: {
          600: "#202945",
          500: "#1C2D61",
          400: "#4169E1",
          300: "#879FE6",
        },
        offbrand: {
          500: "#946F0D",
          400: "#E0B441",
          300: "#E4BD7B",
        },
      },
      screens: { xs: { max: "639px" } },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};
