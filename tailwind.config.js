/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/styles/*.css",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/PageComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/PageComponents/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "480px",
    md: "769px",
    lg: "976px",
    xl: "1440px",
  },
  safelist: [
    {
      pattern: /w-[0-9]/,
    },
    {
      pattern: /h-[0-9]/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9f8fc",
          100: "#bde9f5",
          200: "#90dbee",
          300: "#64cce7",
          400: "#38bde1",
          500: "#1987a4",
          600: "#007d93",
        },
        soft:{
          blue: '#E3EEFF'
        }
      },
      fontFamily: {
        "montserrat": "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
