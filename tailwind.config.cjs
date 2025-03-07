/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        'xs': '395px',
        'sm': '640px',
        'sm-large': '700px',
        'md': '768px',
        'lg-small': '900px',
        'lg': '1024px',
        'lg-large': '1200px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2600px',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0'
          },
        },
        shadowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 55px #fff, 0 0 60px #fff, 0 0 100px #fff'
          },
          '80%': {
            boxShadow: '0 0 60px #fff, 0 0 85px #fff, 0 0 105px #fff'
          }
        },
        wave: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)' },
          '100%': { boxShadow: '0 0 0 50px rgba(255, 255, 255, 0)' },
        },
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-fast': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-custom': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'infinite-scroll': 'infinite-scroll 205s linear infinite',
        'wave': 'wave 1.5s infinite',
        'shadow-pulse': 'shadowPulse 3s ease-in-out infinite'
      },
    },
  },
  plugins: [],
} 