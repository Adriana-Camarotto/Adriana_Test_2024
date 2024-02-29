/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'BodyFont':['Acumin Pro', 'sans-serif']
      },
      colors: {
        'custom-brown': '#AC9B65',
        'custom-light-grey': '#F0F0F0',
        'primary-color': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

