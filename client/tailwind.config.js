/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      budgeter: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    },
    extend: {
      colors: {
        'budgeter-blue': '#3d5f82',
        'background': '#f0f2f5'
      },
      spacing: {
        'box': '30rem',
      },
      boxShadow: {
        'box': '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}