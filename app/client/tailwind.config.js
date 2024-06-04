/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        custom: '#12141D',
      },
      colors: {
        customBlue: '#101A2A',
        customBlue2: '#030B15',
      },
    },
  },
  plugins: [],
};
