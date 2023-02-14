/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "500px",
      msm: "570px",
      lsm: "650px",
      llsm: "720px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      orange: "#A43D20",
      red: "#74151F",
      back: "#ea8648",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
