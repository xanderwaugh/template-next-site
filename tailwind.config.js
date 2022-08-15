/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: [`"Inter"`, "sans-serif"],
        source: ["Source Sans Pro", "sans-serif"],
        display: [`"Inter"`, "sans-serif"],
        body: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
