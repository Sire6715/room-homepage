/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 576px) { ... }

      'md': '500px',
      // => @media (min-width: 960px) { ... }

      'lg': '700px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1000px',

      'xxl': '1300px'

    },
    fontFamily: {
      'superleague': ['League Spartan', 'sans-serif']
    },
    extend: {
      colors: {
       'DarkGray': 'hsl(0, 0%, 63%)',
       'Black': 'hsl(0, 0%, 0%)',
       'White': 'hsl(0, 0%, 100%)',
       'VeryDarkGray': 'hsl(0, 0%, 27%)'
        },
    },
    
  },
  plugins: [],
}
