/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather'],
      },
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        lavender: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        midnight: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        "slide-in-left": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
            opacity: "0",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(100%, 0, 0)",
            opacity: "0",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "float-3d": {
          "0%, 100%": {
            transform: "translateY(0px) rotateX(0deg) rotateY(0deg)",
          },
          "33%": {
            transform: "translateY(-8px) rotateX(2deg) rotateY(1deg)",
          },
          "66%": {
            transform: "translateY(-4px) rotateX(-1deg) rotateY(-2deg)",
          },
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.8)",
          },
        },
        "pulse-3d": {
          "0%, 100%": {
            transform: "scale(1) translateZ(0)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          },
          "50%": {
            transform: "scale(1.05) translateZ(10px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
          },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
        slideinleft: 'slide-in-left 1s ease-in-out 0.25s 1 forwards',
        slideinright: 'slide-in-right 1s ease-in-out 0.25s 1 forwards',
        fadeinup: 'fade-in-up 0.8s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        'float-3d': 'float-3d 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'pulse-3d': 'pulse-3d 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        '3d': '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06)',
        '3d-lg': '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1)',
        '3d-xl': '0 30px 80px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(0, 0, 0, 0.15)',
        'purple-3d': '0 20px 60px rgba(168, 85, 247, 0.3), 0 8px 25px rgba(168, 85, 247, 0.2)',
        'inner-3d': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      screens: {
        'xs': '250px',
      },
    },
  },
  plugins: [],
};
