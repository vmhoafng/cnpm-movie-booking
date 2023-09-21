/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#05113FCC",
        "disabled": "#AA52A1",
        "highlight": "#31D7A9",
        "gradient":" linear-gradient(90deg, rgba(255, 67, 67, 0.85) 7.22%, #AA52A1 49.75%, #002DBB 100%)"
      },
    },
  },
  plugins: [],
};
