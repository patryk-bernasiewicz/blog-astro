/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#71C7CD",
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
    },
  },
  plugins: [],
};
