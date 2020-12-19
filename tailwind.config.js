const { cyan } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        cyan: colors.cyan,
        dbacks: "#a71930"
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
