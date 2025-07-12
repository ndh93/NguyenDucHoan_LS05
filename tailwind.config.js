/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        circular: ['"Circular Std"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
