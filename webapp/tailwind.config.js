/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand100: "#f8f8f8",
        sand200: "#c2b58f",
        grey200: "#e7e7e8",
        grey300: "#999",
        black100: "#333",
        black200: "#666"
      },
    },
  },
  plugins: [],
};
