module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBlue: '#161E53',
      lightBlue: '#87E0ED',
      orange: '#FC9C69',
      red: '#FD5150',
      white: '#FFFFFF',
    },
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
