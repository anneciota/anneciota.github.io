/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fcfcfc',
        'bg-alt': '#f0f4f4',
        text: '#1a2b2a',
        'text-light': '#4a5d5c',
        primary: '#3a6b68', // Muted deep teal/turquoise
        'primary-light': '#699996',
        secondary: '#889e9d', // Soft muted blue-gray
        accent: '#e0ebea',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
