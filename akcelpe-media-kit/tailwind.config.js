/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        red: 'var(--red)',
        'red-soft': 'var(--red-soft)',
        green: 'var(--green)',
        'green-soft': 'var(--green-soft)',
        onaccent: 'var(--on-accent)',
        deep: 'var(--deep)',
      },
      fontFamily: {
        display: ['var(--f-display)'],
        body: ['var(--f-body)'],
        mono: ['var(--f-mono)'],
      },
      screens: {
        // original design ka mobile breakpoint (max-width: 900px)
        narrow: { max: '900px' },
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        rise: 'rise .6s both',
        'rise-late': 'rise .6s .1s both',
      },
    },
  },
  plugins: [],
};
