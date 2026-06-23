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
        bg: '#0a0f1c',
        surface: '#111827',
        primary: '#06b6d4',
        secondary: '#818cf8',
        accent: '#34d399',
      },
      fontSize: {
        'fluid-hero': 'clamp(2.5rem, 6vw, 4.5rem)',
        'fluid-lg': 'clamp(1rem, 2.5vw, 1.25rem)',
      },
    },
  },
  plugins: [],
}
