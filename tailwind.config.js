/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fd839f",
        disabled: "#ccc",
      },
      fontFamily: {
        Antic: ["Antic", "cursive"],
      },
    },
  },
  plugins: [],
};