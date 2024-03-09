/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './styles/*.css',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  screens: {
    sm: '480px',
    md: '769px',
    lg: '976px',
    xl: '1440px',
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
          50: '#e9f8fc',
          100: '#bde9f5',
          200: '#90dbee',
          300: '#64cce7',
          400: '#38bde1',
          500: '#1987a4',
          600: '#187f9b',
        },
      },
    },
  },
  plugins: [],
};
