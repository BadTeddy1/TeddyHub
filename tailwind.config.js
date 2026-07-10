/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0b111c",
        surface2: "#121c2f",
        accent: "#70d6ff",
        accent2: "#e879f9",
        text: "#f8fafc",
        muted: "#98a6bb",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(22, 163, 255, 0.14)",
      },
    },
  },
  plugins: [],
};
