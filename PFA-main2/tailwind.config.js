/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "green1":"#86D4C1",
        "green2":"#B2F8D0",
        "green3":"#65B0AD",
        "green4":"rgba(178, 248, 208, 0.2)",
        "green5":"#4D8C95",
        "green6":"#5BE4A8",
        "bginput":"#D5F7E7",
        "textinput":"rgba(47, 72, 88, 0.61)",
        "textcolor":"#2F4858"
      }
    },
  },
  plugins: [],
}

