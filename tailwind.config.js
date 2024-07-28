/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryGreen:{
          default: '#3ED7A0',
        },
        primaryBlue:{
          default:'#82cff1',
        },
        primaryDark:{
          default:'#222c40',
        },
        primaryLight:{
          default:'#f9f9f9',
        },
      }
    },
  },
  plugins: [],
}

