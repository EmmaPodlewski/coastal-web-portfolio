/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#07889b80",
        "green-900": "#07889b",
        dark: "#1e272c",
        purple: "#431c5d",
      },
    },
  },
  plugins: [],
};
