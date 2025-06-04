/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-down': 'fade-in-down 0.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scale-in': 'scale-in 0.15s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.95, 0.95, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          }
        }
      }
    },
  },
  plugins: [],
} 