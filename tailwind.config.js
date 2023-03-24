/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4717F1",
        "primary-dark": "#350cca",
        secondary: "#B417F1",
        background: "#0E0B16",
        background1: "#0B0D16",
        background2: "hsla(0, 0%, 22%,0.4)",
        "text-muted": "#F5E2C8",
        tertiary: "#D88373",
        text: "#F7F7F7",
      },
      fontFamily: {
        // handwriting: ["sacramento"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
      borderRadius: {
        half: "50%",
      },
      screens: {
        xxs: "300px",
        xs: "425px",
      },
    },
  },
  plugins: [],
};
