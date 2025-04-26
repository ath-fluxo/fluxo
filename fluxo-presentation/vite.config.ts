import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginString({
      include: '**/*.md',
      exclude: ['**/node_modules/**'],
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-markdown'],
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      VITE_APP_TITLE: JSON.stringify(process.env.VITE_APP_TITLE),
    },
  },
  preview: {
    port: 5000,
    open: true,
  },
  assetsInclude: ['**/*.md'],
  publicDir: 'public',
  
})
