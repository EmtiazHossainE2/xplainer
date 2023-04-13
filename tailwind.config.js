/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        big: "1440px",
        large: "1920px",
      },
      colors: {
        primary: "#6366F1",
        primary_bold: "#4F46E5",
        secondary: "#333333",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
