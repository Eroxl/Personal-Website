const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        green: colors.green,
        cyan: colors.cyan,
        violet: colors.violet,
      },
      animation: {
        projects: 'projects 5s ease infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-20%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
        projects: {
          '0%, 100%': {
            transform: 'scale(1.03)',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
      animation: ['hover'],
    },
  },
  plugins: [],
};
