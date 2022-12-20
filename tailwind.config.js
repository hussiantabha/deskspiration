/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-grad":
          "linear-gradient(45deg, hsla(43, 83%, 93%, 1) 0%, hsla(305, 64%, 83%, 1) 50%, hsla(289, 79%, 68%, 1) 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
