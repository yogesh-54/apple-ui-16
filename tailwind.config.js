/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"SF Pro Icons"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        apple: {
          bg: '#f5f5f7',
          header: 'rgba(255, 255, 255, 0.8)',
          headerDark: 'rgba(22, 22, 23, 0.8)',
          text: '#1d1d1f',
          secondary: '#6e6e73',
          tertiary: '#86868b',
          blue: '#0071e3',
          blueHover: '#0077ed',
          border: '#d2d2d7',
          card: '#ffffff',
          cardHover: '#fbfbfd',
          darkCard: '#161617',
          badge: '#b64400',
        },
      },
      boxShadow: {
        'apple-card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'apple-card-hover': '2px 8px 30px rgba(0, 0, 0, 0.12)',
        'apple-modal': '0 20px 60px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'apple': '18px',
        'apple-lg': '28px',
        'apple-pill': '980px',
      },
    },
  },
  plugins: [],
}
