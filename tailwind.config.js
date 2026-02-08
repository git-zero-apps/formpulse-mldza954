/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "hsl(237, 80%, 97%)",
          100: "hsl(237, 80%, 93%)",
          200: "hsl(237, 75%, 85%)",
          300: "hsl(237, 70%, 72%)",
          400: "hsl(237, 65%, 58%)",
          500: "hsl(237, 60%, 48%)",
          600: "hsl(237, 65%, 40%)",
          700: "hsl(237, 70%, 32%)",
          800: "hsl(237, 65%, 25%)",
          900: "hsl(237, 60%, 18%)",
          950: "hsl(237, 55%, 10%)",
        },
      },
      fontFamily: {
        display: ["DM Serif Display", "system-ui", "sans-serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: { "fade-up": "fade-up .6s ease-out both", "fade-in": "fade-in .4s ease-out both", "scale-in": "scale-in .4s ease-out both" },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "scale-in": { from: { opacity: "0", transform: "scale(.95)" }, to: { opacity: "1", transform: "scale(1)" } },
      },
    },
  },
  plugins: [],
};
