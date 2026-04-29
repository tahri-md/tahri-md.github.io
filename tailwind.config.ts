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
        main: '#0D0D0D',
        secondary: '#161616',
        card: '#1E1E1E',
        'accent-main': '#8B5CF6',
        'accent-hover': '#A78BFA',
        'accent-dark': '#6D28D9',
        soft: '#3A3A3A',
        success: '#6B8F71',
        warning: '#B08968',
        error: '#A44A3F',
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
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
