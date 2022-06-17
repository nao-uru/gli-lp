// const colors = require('tailwindcss/colors');

module.exports = {
  mode:"jit",
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/*.html',
  ],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      nevy: '#1e2882',
      skyBlue: '#E6F0FA',
      gray:'#6E6E6E',
      black:'#000000',
      // teal:'#45B4C8',
      yellow:'#FEFE8B',
    }
  }
}
