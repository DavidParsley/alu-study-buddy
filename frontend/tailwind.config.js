/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        alu: {
          blue: "#002E6D",
          red: "#D00D2D",
          white: "#FFFFFF",
          surface: "#F5F7FA",
          border: "#E5E7EB",
          text: "#1A1A1A",
          muted: "#505050",
          light: "#7D7D7D",
          orange: "#D97757",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}