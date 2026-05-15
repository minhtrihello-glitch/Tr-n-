/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#C5A47E",
        dark: "#121212",
        light: "#F9F9F9",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
