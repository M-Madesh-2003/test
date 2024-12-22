/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFCB05"
      },
      colors: {
        primary: "#FFCB05"
      },
      textDecorationColor: {
        primary: "#FFCB05"
      }
    },
  },
  plugins: [],
}