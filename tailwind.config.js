/** @type {import('tailwindcss').Config} */

const pxToRem = (pxValue, base = 16) => `${pxValue / base}rem`;

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      spacing: {
        ...(() => {
          const values = {};
          for (let i = 1; i <= 500; i++) {
            values[`${i}pxr`] = pxToRem(i);
          }
          return values;
        })(),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
