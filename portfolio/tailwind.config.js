/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1220",
        surface: "#0e1625",
        border: "rgba(255,255,255,0.08)",
        primary: "#3b82f6",
        text: {
          primary: "#e5e7eb",
          secondary: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
}
