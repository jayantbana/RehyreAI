/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          ivory: '#FAFAF7',
          porcelain: '#FFFFFF',
          sand: '#F4F0EA',
          border: '#E6E2DA',
          charcoal: '#1C1E21',
          slate: '#525866',
          navy: '#1E3A8A',
          'navy-hover': '#172554',
          terracotta: '#C25E00',
          emerald: '#0D5C3A',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(28, 30, 33, 0.04), 0 1px 2px rgba(28, 30, 33, 0.02)',
        'warm-md': '0 4px 12px -2px rgba(28, 30, 33, 0.06), 0 2px 4px -2px rgba(28, 30, 33, 0.03)',
        'warm-lg': '0 12px 24px -4px rgba(28, 30, 33, 0.08), 0 4px 6px -2px rgba(28, 30, 33, 0.03)',
      }
    },
  },
  plugins: [],
}
