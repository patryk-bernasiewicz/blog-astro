/** @type {import('tailwindcss').Config} */
const darkColor = "#080808";
const lessDarkColor = "#656565";
const lightColor = "#eaeaea";
const lessLightColor = "#a0a0a0";
const accentColor = "#71C7CD";
const darkAccentColor = "#2b9299";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        brandGradientVertical: `linear-gradient(
          to bottom,
          rgb(196 196 196 / 0%) 0%,
          rgb(196 196 196 / 40%) 21%,
          rgb(196 196 196 / 90%) 51%,
          rgb(196 196 196 / 40%) 81%,
          rgb(196 196 196 / 0%) 100%
        )`,
        brandGradientHorizontal: `linear-gradient(
          to bottom,
          rgb(196 196 196 / 0%) 0%,
          rgb(196 196 196 / 40%) 21%,
          rgb(196 196 196 / 90%) 51%,
          rgb(196 196 196 / 40%) 81%,
          rgb(196 196 196 / 0%) 100%
        )`,
      },
      colors: {
        backgroundDark: darkColor,
        backgroundLight: lightColor,
        borderDark: darkColor,
        borderLight: lightColor,
        primary: accentColor,
        primaryDark: darkAccentColor,
        brandGray: {
          50: "#FDFDFD",
          100: "#FAFAFA",
          200: "#F0F0F0",
          300: "#898988",
          400: "#736F6C",
          450: "#6B6765",
          500: "#736F6C",
          600: "#615D5B",
          700: "#4C4847",
          800: "#262322",
          900: "#161617",
        },
      },
      textColor: {
        body: {
          dark: darkColor,
          lessDark: lessDarkColor,
          light: lightColor,
          lessLight: lessLightColor,
        },
      },
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
        serif: ["Quattrocento", "serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.5" }],
        h2: ["2rem", { lineHeight: "1.5" }],
        h3: ["1.75rem", { lineHeight: "1.5" }],
        h4: ["1.5rem", { lineHeight: "1.5" }],
        h5: ["1.25rem", { lineHeight: "1.5" }],
        h6: ["1.125rem", { lineHeight: "1.45" }],
        body: ["1rem", { lineHeight: "1.45" }],
        caption: ["0.875rem", { lineHeight: "1.25" }],
        quote: ["1.125rem", { lineHeight: "1.25" }],
      },
    },
  },
  plugins: [],
};
