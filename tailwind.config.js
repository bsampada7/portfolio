/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        miami: "#c41230",
        secondary: "#e000ff",
        primary: "#8401ff",
        "primary-light": "#b566ff",
        "primary-dark": "#7700e6",

        color1: "#EEB4B3",
        color2: "#C179B9",
        color3: "#A42CD6",
        color4: "#502274",
        color5: "#2F242C",

        "linear-grad": "linear-gradient(#e000ff 0%, #8401ff 100%)",

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
    },
  },
  plugins: [],
};
