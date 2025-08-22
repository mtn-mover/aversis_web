/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Aversis Brand Colors
        'aversis-blue': '#1e5f99',
        'aversis-orange': '#ff7f00',
        'aversis-dark': '#374151',
        'blue-light': '#3b82f6',
        'blue-lighter': '#93c5fd',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}