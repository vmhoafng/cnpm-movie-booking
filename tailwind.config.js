/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06142d",
        disabled: "#AA52A1",
        highlight: "#31D7A9",
        borderPrimary: "#314C81",
        gradientStart: "rgba(255, 67, 67, 0.85)",
        gradientMid: " #AA52A1",
        gradientStop: "#002DBB",
      },
    },
  },
  plugins: [],
};
