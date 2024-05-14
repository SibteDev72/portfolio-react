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
      },
      animation: {
        popIn: 'popIn 0.2s ease-in-out',
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

