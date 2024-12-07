/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: { 50: '#fff', 100: '#e5e7eb' },
        primary: '#E4B1F0',
        secondary: '#E95793',
        accent: '#F4E4B1',
        'dark-purple': { 50: '#5E1675', 100: '#3C0753' },
        'dark-blue': { 50: '#030637', 100: '#160F30' }
      },
      textColor: {
        white: { 50: '#fff', 100: '#e5e7eb' },
        primary: '#E4B1F0',
        secondary: '#E95793',
        accent: '#F4E4B1',
        'dark-blue': { 50: '#030637', 100: '#160F30' },
        'dark-purple': { 50: '#5E1675', 100: '#3C0753' }
      }
    }
  },
  plugins: []
}
