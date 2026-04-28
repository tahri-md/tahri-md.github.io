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
        accent: '#ff9500',
        primary: '#3f2213',
        secondary: '#61361c',
        red: {
          50: '#fef9f3',
          100: '#fed7aa',
          200: '#fdba74',
          300: '#fb923c',
          400: '#f97316',
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
          800: '#7c2d12',
          900: '#5a2410',
          950: '#3d1f0c',
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
