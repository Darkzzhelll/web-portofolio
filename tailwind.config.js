/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display:["group-hover"],
      flexBasis: {
        '1/2': '50%',
        '1/3': '33.3333333%',
        '1/4': '25%',
        '1/5' : '20%',
        '3/4': '75%',
        '0,3': '30%',
        '6/7': '85.7142857%',
        '3/5' : '60%',
        '1/6' : '16.666667%',
      },
    },
    colors: {
      'primary' : '#343434',
      'secondary1' : '#FFFFFF',
      'secondary2' : '#CCCCCC',
      'aksen' : '#716D62',
      'red' : '#DA4E5B',
      'blue_white' : '#60686a',
      'black' : '#1A1A1A',
      'blue' : '#1FA1EC',

    },
    
  },
  plugins: [],
}
