/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          hero: 'url("/hero.png")',
      },
    },
    colors: {
      color: {

        primary: '#ffffff',
  accent: '#780909',
  secondary: '#393e46',
  dark: '#121212',
  bright: '#FFFF00'
      }
      

    }
  },
  plugins: [
    require('flowbite/plugin'), [require("daisyui")],
  ],
}
