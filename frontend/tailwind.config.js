/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-10": "var(--primary-10)",
        "primary-20": "var(--primary-20)",

        // Secondary colors
        "secondary-30": "var(--secondary-30)",
        "secondary-40": "var(--secondary-40)",

        // Text colors
        "textcolor-10": "var(--textcolor-10)",
        "textcolor-30": "var(--textcolor-30)",
        "textcolor-50": "var(--textcolor-50)",
        "textcolor-70": "var(--textcolor-70)",

        // Icon colors
        "iconcolor-10": "var(--iconcolor-10)",
        "iconcolor-20": "var(--iconcolor-20)",

        // Button colors
        "button-10": "var(--button-10)",
        "button-20": "var(--button-20)",

        // Background colors
        "background-10": "var(--background-10)",

        // Lofi colors
        "lofi-primary-50": "var(--lofi-primary-50)",
        "lofi-primary-40": "var(--lofi-primary-40)",
        "lofi-secondary-30": "var(--lofi-secondary-30)",
        "lofi-secondary-20": "var(--lofi-secondary-20)",
        "lofi-secondary-10": "var(--lofi-secondary-10)",

        // Shadow color
        "shadow-gambar": "var(--shadow-gambar-box-shadow)",
      },
      fontFamily: {
        // Aliasing font untuk penyederhanaan
        ulasan: ["OpenSans-SemiBoldItalic", "sans-serif"],
        navbar: ["OpenSans-SemiBold", "sans-serif"],
        headline: ["OpenSans-Bold", "sans-serif"],
        body: ["OpenSans-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
