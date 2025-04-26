"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("@tailwindcss/vite");
const plugin_react_1 = require("@vitejs/plugin-react");
const vite_2 = require("vite");
const vite_plugin_string_1 = require("vite-plugin-string");
// https://vite.dev/config/
exports.default = (0, vite_2.defineConfig)({
    plugins: [
        (0, plugin_react_1.default)(),
        (0, vite_1.default)(),
        (0, vite_plugin_string_1.default)({
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
});
