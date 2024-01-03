/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        'html':'#F1662A'
      }
    },
  },
  plugins: [require('flowbite/plugin')],

}
