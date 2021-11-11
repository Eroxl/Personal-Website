const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        green: colors.green,
        cyan: colors.cyan,
        violet: colors.violet,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  plugins: [],
};
