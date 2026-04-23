import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: '#f97316',
        primary: '#3f2213',
        secondary: '#61361c',
        red: {
          50: '#faf8f8',
          100: '#f4f1f1',
          200: '#e6dede',
          300: '#d4c7c7',
          400: '#b88f8f',
          500: '#8b1a1a',
          600: '#7a1515',
          700: '#661111',
          800: '#520d0d',
          900: '#3d0909',
          950: '#2a0505',
        },
      },
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
        bebas: 'var(--font-bebas)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float-dots': 'float-dots 2s ease-in-out infinite',
        'float-dots-delay-200': 'float-dots 2s ease-in-out infinite 0.2s',
        'float-dots-delay-400': 'float-dots 2s ease-in-out infinite 0.4s',
        'slide-in-left': 'slide-in-left 0.4s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'float-dots': {
          '0%, 100%': { transform: 'translateY(-8px)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          'from': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, var(--grid-color, #0001) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color, #0001) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, #fff1 1px, transparent 1px), linear-gradient(to bottom, #fff1 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
} satisfies Config
