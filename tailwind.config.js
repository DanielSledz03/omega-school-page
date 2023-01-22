/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg1Mobile: "url('/assets/Bg1.svg)",
      },
      screens: {
        xs: '320px',
        xms: '350px',
        xm: '380px',
        '3xl': '1920px',
      },

      fontFamily: {
        NeuzeitGrotesk: ['NeuzeitGrotesk'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
