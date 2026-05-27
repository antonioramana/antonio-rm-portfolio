/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mocha': {
          DEFAULT: '#3D2A1D',
          '50': '#F5EAD8',
          '100': '#EBDABF',
          '200': '#D9BC92',
          '300': '#C49E6A',
          '400': '#9C7B53',
          '500': '#3D2A1D',
          '600': '#321F14',
          '700': '#26170E',
          '800': '#1A0F09',
          '900': '#0D0704',
        },
        'vanilla': {
          DEFAULT: '#D8C6A4',
          '50': '#FBF7EE',
          '100': '#F7EFDC',
          '200': '#F0E4C5',
          '300': '#E8D5AC',
          '400': '#DCC592',
          '500': '#D8C6A4',
          '600': '#C2A87E',
          '700': '#A38659',
          '800': '#7A6440',
          '900': '#4E3F28',
        },
      },
    },
  },
  plugins: [],
};
