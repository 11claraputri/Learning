/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./layouts/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      abc: ['Lora', 'serif'],
      galih: ['Playfair Display', 'serif'],
      libre: ['Libre Caslon Display', 'serif']
    },
    animation: {
      scroll: 'scroll 40s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-250px * 14))' },
      },
    },

    
  },
  plugins: [],
}
