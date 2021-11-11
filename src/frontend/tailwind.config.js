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
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
      animation: ['motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
