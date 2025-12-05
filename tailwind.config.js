/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mocha': {
          DEFAULT: '#4B3935',
          '50': '#F0E7D5',
          '100': '#E8DDC8',
          '200': '#D8C9B0',
          '300': '#C8B598',
          '400': '#B8A180',
          '500': '#4B3935',
          '600': '#3D2E2A',
          '700': '#2F2320',
          '800': '#211815',
          '900': '#130E0B',
        },
        'vanilla': {
          DEFAULT: '#F0E7D5',
          '50': '#FDFCF9',
          '100': '#FBF9F3',
          '200': '#F7F3E7',
          '300': '#F3EDDB',
          '400': '#EFE7CF',
          '500': '#F0E7D5',
          '600': '#E6D9C0',
          '700': '#DCCBAB',
          '800': '#D2BD96',
          '900': '#C8AF81',
        },
      },
    },
  },
  plugins: [],
};
