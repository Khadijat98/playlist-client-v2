/** @type {import('tailwindcss').Config} */
const lilac = '#A594F9';
const white = '#F5EFFF';
const purple = '#7371FC';
const purpleShadow = '#413f99';
const pinkShadow = 'rgb(87, 11, 55)';
const whiteShadow = '#837c8f';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['Molengo', 'sans-serif'],
      header: ['Montserrat', 'sans-serif']
    },
    colors: {
      'purple-app': '#b993d6',
      'blue-app': '#8ca6db',
      'purple': purple,
      'lilac': lilac,
      'white': white,
      'lilac-light': '#cdc1ff',
      'purple-shadow': '#413f99',
      'purple-hover': '#8d8bfa',
      'white-shadow': '#837c8f',
      'white-hover': '#ffffff',
      'pink': 'rgb(184, 27, 119)',
      'pink-shadow': 'rgb(87, 11, 55)',
      'pink-hover': 'rgb(216, 74, 157)'
    },
    screens: {
      'mobile': '500px',
      'mobile-lg': '610px',
      'tablet': '768px',
      'tablet-lg': '800px',
      'desktop': '1024px',
      'desktop-lg': '1080px',
      'desktop-xl': '1440px',
      'desktop-xxl': '2160px'
    },
    extend: {
      dropShadow: {
        link: [
          '0px 1px 2px ' + white,
          '1px 2px 3px ' + lilac
        ],
        title: [
          '0px 1px 2px ' + white,
          '1px 2px 3px ' + lilac,
          '2px 3px 4px ' + purple
        ],
        subHeader: [
          '0px 1px 2px' + white,
          '1px 2px 3px' + white
        ],
        header: [
          '0px 1px 2px ' + white,
          '1px 2px 2px ' + white,
          '2px 3px 4px ' + lilac,
          '3px 4px 5px ' + lilac,
          '4px 5px 6px ' + lilac,
        ]
      },
      boxShadow: {
        home: [
          '0px 1px 2px ' + purple,
          '1px 2px 3px ' + purple,
          '2px 3px 4px ' + purple,
          '4px 5px 6px ' + purple,
          '5px 6px 7px ' + purple,
          '6px 7px 8px ' + purple,
          '7px 8px 9px ' + purple,
          '8px 9px 10px ' + purple,
          '9px 10px 11px ' + white,
        ],
        playlist: [
          '0px 1px 2px ' + purple,
          '1px 2px 3px ' + purple,
          '2px 3px 4px ' + purple,
          '4px 5px 6px ' + white,
        ],
        purpleBtn: [
          '0px 1px ' + purpleShadow,
          '1px 2px ' + purpleShadow,
          '2px 3px ' + purpleShadow,
          '3px 4px black'
        ],
        pinkBtn: [
          '0px 1px ' + pinkShadow,
          '1px 2px ' + pinkShadow,
          '2px 3px ' + pinkShadow,
          '3px 4px black'
        ],
        whiteBtn: [
          '0px 1px ' + whiteShadow,
          '1px 2px ' + whiteShadow,
          '2px 3px ' + whiteShadow,
          '3px 4px black'
        ]
      },
      gridTemplateColumns: {
        'song': 'repeat(1, minmax(1fr, 2fr))'
      }
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
