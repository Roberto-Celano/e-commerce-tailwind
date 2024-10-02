/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Cerca classi nelle cartelle src
    "./*.html"  // Cerca classi nei file HTML nella radice
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

