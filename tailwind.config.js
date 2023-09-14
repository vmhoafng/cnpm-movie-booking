/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#05113f",
        highlight: "#31D7A9",
        linear:
          "linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)",
      },
    },
  },
  plugins: [],
};
