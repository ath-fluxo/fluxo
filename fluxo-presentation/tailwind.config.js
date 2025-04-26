module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'neu-light': '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
        'neu-inset-light': 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff',
        'neu-dark': '8px 8px 16px #222222, -8px -8px 16px #2a2a2a',
        'neu-inset-dark': 'inset 8px 8px 16px #222222, inset -8px -8px 16px #2a2a2a'
      },
      colors: {
        'fluxo-bg-light': '#F0ECE3',
        'fluxo-bg-dark': '#1A1A23',
        // adicione variações de cor do design system Fluxo...
      }
    }
  },
  plugins: [],
};