const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  // {
  //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //   safelist: ["bg-Nakamoto-200","bg-Szabo","bg-Finney","bg-Buterin", "text-Nakamoto","text-Szabo","text-Finney","text-Buterin"]
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        cyan: colors.cyan,
        dbacks: "#a71930",
        capOne: "#004977",
        Nakamoto: colors.red,
        Szabo: colors.orange,
        Finney: colors.blue,
        Buterin: colors.green
      },
      spacing: {
        100: '25rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
