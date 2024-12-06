/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#241663',
        secondary: '#A72693',
        black: { 50: '#26355D', 100: '#160F30' },
        accent: '#EAE7AF',
        white: { 50: '#fff', 100: '#e5e7eb' }
      },
      textColor: {
        white: { 50: '#fff', 100: '#e5e7eb' },
        primary: '#241663',
        secondary: '#A72693',
        black: { 50: '#26355D', 100: '#160F30' },
        accent: '#EAE7AF'
      }
    }
  },
  plugins: []
}
