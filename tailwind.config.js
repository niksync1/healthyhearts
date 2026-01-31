module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e', // teal
        secondary: '#16a34a',
        accent: '#fb923c',
        brand: {
          red: '#E63946',
          green: '#7ED957',
          dark: '#2E7D32',
          charcoal: '#111827',
          metal: '#9CA3AF'
        }
      }
    }
  },
  plugins: [],
}
