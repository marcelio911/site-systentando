/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#004f4f',
          light: '#006d6d',
          dark: '#003535',
        },
        accent: {
          main: '#ff7d50',
          light: '#ff9b78',
          dark: '#dd5c30',
        },
        dark: {
          background: '#121212',
          card: '#1e1e1e',
          border: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
