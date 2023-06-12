/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: 'rgb(99 102 241)'
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}