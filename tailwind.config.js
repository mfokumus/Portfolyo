/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff3200",
        passive: "#F2F2FC",
        primary: "#343A40",
        secondary: "#86E896",
        border: "#cfcfcf",
      },
      flex: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
