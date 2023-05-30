/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['Open Sans Condensed', 'sans-serif'],
        'poiret': ['Poiret One', 'sans-serif']
      },
      spacing: {
        '90': '90px',
        '180': '45rem',
        '11': '44px',  // 11 * 4 = 44
        '45': '45px',
      },
      width: {
        '166': '166px',
        '250': '250px',
        '298': '298px',

      },
      height: {
        '170': '170',
        '570': '570px',
        '550': '550px',
        
      },
      maxHeight: {
        'img': '550px',
      },
      fontSize: {
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
      },
      lineHeight: {
        '42': '42px',
      },
      colors: {
        'customblue': '#82B5D1',
        'customemail': '#CDE1ED',
        'customgray': '#F4F6FA',
        'productprice': '#6891A7',
        'producttitle': '#344854',
        'cartContinue': '#F4F6FA',
        'paymentbg': '#F4F6FA', 
      },
    },
  },
  plugins: [],
}

