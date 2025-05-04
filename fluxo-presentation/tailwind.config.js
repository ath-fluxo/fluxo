/** tailwind.config.js **/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        // sombra externa neomórfica
        'neo': '4px 4px 8px rgba(0,0,0,0.1), -4px -4px 8px rgba(255,255,255,0.7)',
        // sombra interna neomórfica
        'neo-inset': 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(255,255,255,0.6)'
      },
      colors: {
        primary: '#170243FF',    // roxo escuro
        secondary: '#A4EFD0FF',  // verde claro
        highlight: '#4D370CFF',  // amarelo amarronzado
        lightBg: '#F6F0F0E1',    // fundo claro
        darkBg: '#151218'      // fundo escuro
        // adicione variações de cor do design system Fluxo...
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-animate'),
    require('tailwindcss-neumorphism'),
  ],
};