/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        surface: '#ffffff',
        'surface-muted': '#f4f6f9',
        border: '#dde2ea',
        text: '#1b2330',
        'text-muted': '#5b6675',
        accent: '#1f5fbf',
        'accent-soft': '#e6eefa',
        notice: '#fff3c4',
        'notice-border': '#e6cf7a',
      },
      fontFamily: {
        sans: ['"Public Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: '#dde2ea',
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
