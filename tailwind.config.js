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


        },
        PremierBg: {           

  

  

  50: '#ecf1fe',
  100: '#cdd4e6',
  200: '#aeb7d1',
  300: '#8f9abd',
  400: '#6e7da9',
  500: '#556390',
  600: '#424d70',
  700: '#2B3147',
  800: '#1b2133',
  900: '#050b17',



          

        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
