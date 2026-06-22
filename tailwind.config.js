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
        accent: '#00ff88',
        'dash-card': '#0a1628',
        'dash-border': '#1e2d4a',
      },
      boxShadow: {
        'glow-sm': '0 0 12px rgba(0, 217, 255, 0.2)',
        'glow-md': '0 0 30px rgba(0, 217, 255, 0.15), 0 0 80px rgba(0, 217, 255, 0.06)',
        'glow-lg': '0 0 60px rgba(0, 217, 255, 0.2), 0 0 120px rgba(0, 217, 255, 0.08)',
        'dash': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)',
      },
      fontSize: {
        'fluid-hero': 'clamp(2.5rem, 6vw, 4.5rem)',
        'fluid-lg': 'clamp(1rem, 2.5vw, 1.25rem)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'status-pulse': 'status-pulse 2s ease-in-out infinite',
        'dash-fade': 'dash-fade 0.5s ease-out',
        'grid-move': 'grid-move 20s linear infinite',
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
        'status-pulse': {
          '0%, 100%': { boxShadow: '0 0 4px rgba(0,255,136,0.4)' },
          '50%': { boxShadow: '0 0 12px rgba(0,255,136,0.8)' },
        },
        'dash-fade': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-move': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(40px) translateY(40px)' },
        },
      },
    },
  },
  plugins: [],
}
