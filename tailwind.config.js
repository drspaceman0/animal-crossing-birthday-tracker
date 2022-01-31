module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        leaves: "url('../images/bg_grass.jpg')",
      },
      colors: {
        'whiteSmoke': "#f8f8f0",
        'msgTextColor': "#827157",
        'coralPink': "#faa5af",
        'kahki': "#ffecb7",
        'ACBrown': {
          100: "#f3e9c7",
          200: "#ead282",
          300: "#cc8635",
          400: "#b57327",
          500: "#3f2c0d",
        }
      }
    },
  },
  plugins: [],
}