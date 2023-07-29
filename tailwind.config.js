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
      primary: "#FFC000",
      secondary: "orange",
      white: "white",
      grey: "grey",
      blue: "blue",
      black: "black",
      btn: "rgba(0, 0, 0, 0.05)",
      bg_pr: "#FAFAFA",
    },
    backgroundImage: {
      'hero-pattern': "url('images/home/hero.png')",
      'footer-texture': "url('/img/footer-texture.png')",
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
