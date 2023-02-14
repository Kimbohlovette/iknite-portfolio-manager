/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
          fontFamily: {
            "poppins": ["Poppins"]
          },
          colors: {
              "primary": {
                  50: "#e8e8ec",
                  100: "#d1d1d9",
                  200: "#bbbac6",
                  300: "#a4a3b3",
                  400: "#8d8ca0",
                  500: "#76748d",
                  600: "#5f5d7a",
                  700: "#494667",
                  800: "#322f54",
                  900: "#1b1841"
              },
              "secondary": {
                  900: "#e54451",
                  800: "#fe4c5a",
                  700: "#fe5e6b",
                  600: "#fe707b",
                  500:"#fe828c",
                  400:"#fe949c",
                  300:"#ffa6ad",
                  200:"#ffb7bd",
                  100:"#ffdbde",
                  50:"#ffedef"
              }
          }
      }
    },
    plugins: []
  };
  