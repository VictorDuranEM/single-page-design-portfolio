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
        black: "#030303",
        mediumBrown: "#7A746E",
        lightCream: "#FFF7F0",
        galacticBlue: "#755CDE",
        summerYellow: "#F6A560",
        pink: "#F39E9E",
        lightRed: "#EB7565",
        cyan: "#61C4B7",
        darkPurple: "#552049",
      },
    },
  },
  plugins: [],
}