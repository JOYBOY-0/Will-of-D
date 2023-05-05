/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ['red-will']: '#FB073B',
        ['dark-void']: '#131211'
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        glare: 'var(--font-glare)',
        text: 'var(--font-text)'
      }
    }
  },
  plugins: []
}
