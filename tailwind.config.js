/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a6f6',
          500: '#0c89e3',
          600: '#006bc3',
          700: '#00549f',
          800: '#004783',
          900: '#003d6f',
          950: '#00264a',
        },
        dark: {
          100: '#d5d7e0',
          200: '#acaebf',
          300: '#8c8fa3',
          400: '#666980',
          500: '#4d4f66',
          600: '#34354a',
          700: '#292A43',
          800: '#1d1e30',
          900: '#0c0d21',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 