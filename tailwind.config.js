/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max':'576px'},
      // => @media (min-width: 640px) { ... }
      'xs': {'max':'370px'},
      // => @media (min-width: 640px) { ... }
      'md': {'max':'768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max':'1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max':'1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max':'1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primaryRed': '#E2342D',
      'primaryBlue': '#004197',
      'black': '#222222',
      'gray': '#4A4B4D',
      'grayBg': '#F8F8F8',
      'grayBg2': '#D2D2D2',
      'grayBg3': '#F3F3F3',
      'white': '#ffffff'
    },
    fontFamily: {
      'poppins': 'poppins',
      'monst': ['Montserrat']
    }
},
  plugins: []
}