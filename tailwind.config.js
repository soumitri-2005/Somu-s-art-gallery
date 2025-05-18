/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        one: ['var(--font-one)'],
        two: ['var(--font-two)'],
        three: ['var(--font-three)'],
      },
    },
  },
  plugins: [],
};
