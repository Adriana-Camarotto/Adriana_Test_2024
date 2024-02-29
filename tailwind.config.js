/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'BodyFont':['Acumin Pro', 'sans-serif']
      },
      colors: {
        'primary-color': '#FFFFFF',
        'custom-brown': '#AC9B65',
        'custom-black': '#1C1C1C',
        'custom-grey': '#5F5F5F',
        'custom-grey-dark': '#BEBEBE',
        'custom-light-grey': '#F0F0F0',        
      }
    },
  },
  plugins: [],
}

