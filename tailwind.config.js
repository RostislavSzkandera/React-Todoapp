/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      colors: {
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
        },
       
      },
      fontFamily: {
        PTSans: ['PT Sans', "sans-serif"],
      },
    },
  },
  plugins: [],
}

