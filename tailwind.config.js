/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1150px'},
      // => @media (max-width: 1023px) { ... }

      'xmd': {'max': '950px'},

      'md': {'max': '850px'},
      // => @media (max-width: 767px) { ... }

      'smd': {'max': '790px'},

      'sm': {'max': '690px'},
      // => @media (max-width: 639px) { ... }
      
      'xsm': {'max': '450px'},

    }
  },
  plugins: []
}
