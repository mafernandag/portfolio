/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
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
      },
      backgroundImage: {
        'light-gradient':
          'radial-gradient(100% 50% at 50% 0%, rgba(228, 177, 240,0.25) 0,rgba(0,163,255,0) 50%,rgba(0,163,255,0) 100%)',
        'dark-gradient':
          'radial-gradient(circle at 50% -30%, #5E1675, #030637, #000)'
      }
    }
  },
  plugins: []
}
