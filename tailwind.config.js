/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'hx-',
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md"
  ],
  darkMode: ['class', 'html[class~="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}

