/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite"),
    require("daisyui")
  ],
}