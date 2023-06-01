/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#EEEDED",
        // "custom-black": "#1a1a1a",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
