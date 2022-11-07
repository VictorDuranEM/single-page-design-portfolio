/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#030303",
        purple: "#755CDE",
        red: "#EB7565",
        orange: "#F6A560",
      },
    },
  },
  plugins: [],
}