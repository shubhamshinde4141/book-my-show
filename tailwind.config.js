module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:
      {
        NavbarBg: {
            
  

  50: '#edf1fc',
  100: '#d3d4e1',
  200: '#b6b7c9',
  300: '#999ab2',
  400: '#7c7e9b',
  500: '#636481',
  600: '#4c4e65',
  700: '#363849',
  800: '#21212e',
  900: '#0a0a16',


          }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
