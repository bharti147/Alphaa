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
        'custom-gray': '#F5F5F5'
        
      },
      letterSpacing:{
        'tracking-tightest': '-0.75rem'
      },
      fontFamily: {
        signika: ['"Signika Negative"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

