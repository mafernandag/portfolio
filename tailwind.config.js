/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: { 50: '#fff', 100: '#e5e7eb' },
        primary: '#E4B1F0',
        secondary: '#F075AA',
        accent: '#F4E4B1',
        'dark-purple': { 50: '#5E1675', 100: '#3C0753' },
        'dark-blue': { 50: '#030637', 100: '#160F30' }
      },
      textColor: {
        white: { 50: '#fff', 100: '#e5e7eb' },
        primary: '#E4B1F0',
        secondary: '#F075AA',
        accent: '#F4E4B1',
        'dark-blue': { 50: '#030637', 100: '#160F30' },
        'dark-purple': { 50: '#5E1675', 100: '#3C0753', 200: '#411749' }
      },
      backgroundImage: {
        'light-gradient':
          'radial-gradient(100% 50% at 81% 0%, rgba(172, 94, 201, 0.2) 0%,rgba(0,163,255,0) 60%,rgba(0,163,255,0) 100%)',
        'dark-gradient':
          'radial-gradient(circle at 50% -25%, #5E1675 5%, #030637 35%, #000 150%)'
      }
    }
  },
  plugins: []
}
