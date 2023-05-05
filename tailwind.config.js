/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ['red-will']: 'var(--color-red-will)',
        ['dark-void']: 'var(--color-dark-void)'
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        glare: 'var(--font-glare)',
        text: 'var(--font-text)'
      },
      width: {
        ['full-vw']: 'calc(var(--vw) * 100)'
      },
      height: {
        ['full-vh']: 'calc(var(--vh) * 100)'
      }
    }
  },
  plugins: []
}
