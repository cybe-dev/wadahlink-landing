module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        100: "#FFF",
        200: "#F0F0F0",
        300: "#EEE",
        400: "#DDD",
      },
      black: {
        100: "#333",
        200: "#555",
      },
      primary: {
        100: "#CE1212",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
