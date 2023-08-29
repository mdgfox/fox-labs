/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gold': '#FEC501', // main text color

        'dark': '#011A27', // background
        'dark-slider': '#F0810F', // slider
        'dark-button': '#E6DF44', // buttons

        'light': '#F1F3CE', // background
        'light-slider': '#1E656D', // slider
        'light-button': '#F62A00', // buttons
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
