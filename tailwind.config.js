/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'pareja': "url('/src/assets/images/couple.jpg')",
      },
      animation: {
        'slide-right': 'slide-right 35s linear infinite', // Movimiento de izquierda a derecha
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(100%)' },           // Comienza fuera de la vista (a la derecha)
          '100%': { transform: 'translateX(-100%)' },     // Termina fuera de la vista (a la izquierda)
        },
      },
      screens: {
        'sm-390': '391px',
        'sm-480': '480px'
      },
      fontFamily: {
        'integral-extrabold': ['IntegralCF-ExtraBold', 'sans-serif'],
        'integral-heavy': ['IntegralCF-Heavy', 'sans-serif']
      }
    },
  },
  plugins: []
};
