/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./pages/*.html"],
  theme: {
    extend: {},
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1000px",
      xl: "1250px",
      xxl: "1500px",
    },
    colors: {
      primary: "yellow",
      secondary: "orange",
    },
    container: {
      padding: "20px",
      maxWidth: {
        sm: "500px",
        md: "700px",
        lg: "900px",
        xl: "1100px",
        xxl: "1300px",
      },
    },
  },
  plugins: [],
};
