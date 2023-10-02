/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05113FCC",
        disabled: "#AA52A1",
        highlight: "#31D7A9",
        gradientStart: "rgba(255, 67, 67, 0.85)",
        gradientMid: " #AA52A1",
        gradientStop: "#002DBB",
      },
    },
  },
  plugins: [],
};
