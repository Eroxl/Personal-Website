module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.8s infinite',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
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
