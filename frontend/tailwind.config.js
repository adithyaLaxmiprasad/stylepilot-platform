module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#C1A67B',
        'brand-black': '#111111',
      },
      fontFamily: {
        sans: ['var(--font-jost)', 'sans-serif'],
      },
      animation: {
        'aurora-1': 'aurora-1 25s ease-in-out infinite alternate',
        'aurora-2': 'aurora-2 30s ease-in-out infinite alternate',
        'aurora-3': 'aurora-3 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'aurora-1': {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '100%': { transform: 'translate(10vw, 15vh) scale(1.2) rotate(45deg)' },
        },
        'aurora-2': {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '100%': { transform: 'translate(-15vw, -10vh) scale(1.1) rotate(-30deg)' },
        },
        'aurora-3': {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '100%': { transform: 'translate(15vw, -15vh) scale(1.3) rotate(60deg)' },
        }
      }
    },
  },
  plugins: [],
};