/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'bg-accent',
    'bg-accent-dark',
    'text-accent',
    'text-accent-light',
    'border-accent',
    'border-accent-light',
    'hover:bg-accent',
    'hover:bg-accent-dark',
    'dark:text-accent-light',
    'dark:border-accent-light',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#040303', // Almost black
          light: '#0D5C63',   // Teal
        },
        accent: {
          DEFAULT: '#0D5C63', // Teal (main accent)
          light: '#F4FAFF',   // Light blue/white
          dark: '#040303',    // Almost black
          subtle: '#F4FAFF',  // Light blue/white
          red: '#931F1D',     // Dark red accent
          taupe: '#96897B',   // Taupe/beige
        },
        error: {
          DEFAULT: '#931F1D', // Dark red
          light: '#DC2626',   // Lighter red
          bg: '#FEF2F2',      // Light red bg
          'bg-dark': '#7F1D1D',
        },
        success: {
          DEFAULT: '#0D5C63', // Teal for success
          light: '#4ADE80',
          bg: '#F0FDF4',
          'bg-dark': '#14532D',
        },
        warning: {
          DEFAULT: '#96897B', // Taupe for warnings
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
