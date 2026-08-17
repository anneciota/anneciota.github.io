/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fcfbf9',
        'bg-alt': '#f4f1eb',
        text: '#2d2d2d',
        'text-light': '#555555',
        primary: '#8a6044', // Warm terracotta
        'primary-light': '#d4a373',
        secondary: '#5d7052', // Sage green
        accent: '#e9edc9',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
