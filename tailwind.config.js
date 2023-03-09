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
      },
      fontFamily: {
        handwriting: ["sacramento"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
