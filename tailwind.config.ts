import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c2d6b',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-left': 'slideLeft 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'zoom-in': 'zoomIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'flip-in': 'flipIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.5))' },
        },
        zoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        flipIn: {
          '0%': {
            opacity: '0',
            transform: 'perspective(400px) rotateY(90deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'perspective(400px) rotateY(0)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.2)',
      },
      backdropBlur: {
        'md': '12px',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
} as Config
