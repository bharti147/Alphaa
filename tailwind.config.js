/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#2A2C38',
        'custom-dark2': '#22232D',
        'custom-orange': '#FF9021',
        'custom-orange2': '#FFA427',
        'custom-blue':'#2c8097',
        'custom-blue3':'#1c212e',
        'custom-blue2':'#242c42',
        'custom-gray': '#F5F5F5',
        'custom-gray2':'#B8B8B8',
        'custom-header':'#1a3d4f',

        
      },
      letterSpacing:{
        'tracking-tightest': '-0.75rem'
      },
      fontFamily: {
        signika: ['"Signika Negative"', 'sans-serif'],
      },
      screens:{
        'xs-sm':'480px'
      }
    },
  },
  plugins: [],
}

