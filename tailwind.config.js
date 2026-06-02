/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: '#020508',
        surface: '#060d14',
        primary: '#00d9ff',
        secondary: '#7c3aed',
      },
      boxShadow: {
        'glow-sm': '0 0 12px rgba(0, 217, 255, 0.2)',
        'glow-md': '0 0 30px rgba(0, 217, 255, 0.15), 0 0 80px rgba(0, 217, 255, 0.06)',
        'glow-lg': '0 0 60px rgba(0, 217, 255, 0.2), 0 0 120px rgba(0, 217, 255, 0.08)',
      },
      fontSize: {
        'fluid-hero': 'clamp(2.5rem, 6vw, 4.5rem)',
        'fluid-lg': 'clamp(1rem, 2.5vw, 1.25rem)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
