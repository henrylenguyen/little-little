/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      textPrimaryColor: '#23221F',
      textSecondColor: '#fff',
      textLightColor: '#989A9C',
      buttonColor: 'rgba(255, 0, 10, 1)'
    },
    fontFamily: {
      primaryFont: 'Montserrat',
      secondFont: 'iCielKoni'
    },
    boxShadow: {
      primaryShadow: '-1px 3px 3px 0px rgba(178, 91, 11, 0.5) inset',
      secondShadow: '0px 10px 0px 0px rgba(189, 0, 11, 1)',
      secondShadow_1: '0px 5px 0px 0px rgba(189, 0, 11, 1)'
    }
  },
  plugins: []
}
