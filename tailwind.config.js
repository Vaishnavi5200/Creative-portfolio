/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        card: "#171717",
        line: "#2A2A2A",
        accent: "#4F8CFF",
        muted: "#B5B5B5",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
