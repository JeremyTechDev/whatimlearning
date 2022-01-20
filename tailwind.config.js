const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      dark: '#161E53',
      light: '#87E0ED',
      orange: '#FC9C69',
      red: '#FD5150',
      twitter: '#00ACEE',
    },
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        hidden: 'hidden',
      },
      gridTemplateColumns: {
        'landing-cards-grid': 'repeat(3, 208px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
