/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/home/bg.png')",
      },
      colors: {
        'latar-blue': '#1B262C',
        'primary-blue': '#0F4C75',
        'secondary-blue': '#3282B8',
      },
    },
  },
  plugins: [],
};
