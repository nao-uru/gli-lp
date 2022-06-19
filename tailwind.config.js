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
      yellow:'#FEFE8B',
    },

    screens: {
      'md': {'max': '740px','min':"100px"},
      'lg': {'max': '1024px','min':"741px"},
      'xl': {'max': '1500px'},
    }
  }
}
