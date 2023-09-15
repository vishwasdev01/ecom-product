module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: {
          50: "#e3edff",
          700: "#3086c8",
          A400: "#2c7ef8",
          A200: "#4285f4",
          "50_01": "#edf3fc",
        },
        red: { 500: "#ea4335", 600: "#f82c2c", A700: "#eb001b" },
        pink: { 900: "#8b1325" },
        amber: { 500: "#feb511", "500_01": "#fbbc04", A400: "#ffc000" },
        green: { 500: "#59ae43", 600: "#34a853" },
        gray: {
          50: "#f9f9f9",
          100: "#FAFAF9",
          300: "#e4e4e4",
          500: "#999999",
          700: "#696969",
          "500_01": "#969696",
          "700_01": "#5f6368",
        },
        light_blue: { 800: "#006fcf" },
        teal: { 300: "#5bb59a" },
        black: { 900: "#000000" },
        light_green: { 500: "#85bf55" },
        blue_gray: {
          100: "#cfcfcf",
          700: "#4d5254",
          800: "#37465a",
          900: "#252f3d",
          "900_01": "#333333",
        },
        deep_purple: { A400: "#5a31f4" },
        orange: { A700: "#ff5f00" },
        indigo: { 900: "#142688", "900_01": "#003087", "900_02": "#012169" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
