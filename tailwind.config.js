/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
  fontFamily: {
    Poppins: ['Poppins', 'sans-serif'],
    Lobster: ['Lobster','cursive'],
    BerkshireSwash: ['Berkshire Swash','cursive'],
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}