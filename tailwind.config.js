/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)'}
        },
        popOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)'}
        },
      },
      animation: {
        popIn: 'popIn 0.3s ease forwards',
        popOut: 'popOut 0.3s ease forwards',
      }
    },
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

