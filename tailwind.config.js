module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:
      {
        NavbarBg: {
            
  50: '#e0f6ff',
  100: '#bddef4',
  200: '#96c7e8',
  300: '#6eb0dd',
  400: '#489ad2',
  500: '#3080b9',
  600: '#226491',
  700: '#154768',
  800: '#062b41',
  900: '#000f1b',

          }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
