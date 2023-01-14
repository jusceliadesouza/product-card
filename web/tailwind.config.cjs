/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#D9CDF7",
        secondary: "#271A45",
      },
      backgroundImage: {
        'visionButton' : "url('../assets/vector.svg')",
        'closeButton': "url('../assets/close.svg')",
      }
    },
  },
  plugins: [],
};
