/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'hx-',
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/css/styles.css"
  ],
  darkMode: ['class', 'html[class~="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}

