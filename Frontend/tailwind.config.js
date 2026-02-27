export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07080d",
        surface: "#10121a",
        surface2: "#181b26",
        border: "#252838",
        accent: "#c8f135",
        blue: "#4d7cfe",
        teal: "#34d9b3",
        muted: "#8d93b5"
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        epi: ["Epilogue", "sans-serif"]
      }
    }
  },
  plugins: []
}