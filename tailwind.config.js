/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages", "components"].map((folder) => `${folder}/**/*.{tsx,jsx}`),
  theme: {
    extend: {
      scrollbar: {
        width: "2px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
  prefix: "t-",
};
