/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',  // File dalam src
    './index.html'           // File HTML di luar src
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], // Tambahkan font yang diambil dari Google Fonts
      },
    },
  },
  plugins: [
    require('tailwindcss-text-stroke')
  ],
}

