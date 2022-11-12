/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#fd839f",
        primary: "black",
        disabled: "#ccc",
      },
      fontFamily: {
        Antic: ["Antic", "cursive"],
      },
    },
  },
  plugins: [],
};
