/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
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
      secondary: "#F2F3F7",
      white: "white",
      grey: "grey",
      blue: "blue",
      black: "black",
      btn: "rgba(0, 0, 0, 0.05)",
      bg_pr: "#FAFAFA",
      bl_gradient: "#0C0926",
      input: "#DBDEE7,"
    },
    backgroundImage: {
      "hero-pattern": "url('images/home/hero.png')",
      "footer-texture": "url('/img/footer-texture.png')",
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
