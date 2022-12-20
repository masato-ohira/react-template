import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { config } from './package.json'

const outDir = resolve(__dirname, `${config.dist}`)
const srcDir = resolve(__dirname, config.src)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  base: config.base,
  server: {
    host: '0.0.0.0',
    port: config.port,
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
  root: srcDir,
  build: {
    outDir,
    assetsDir: '_vite',
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lodash: ['lodash-es'],
        },
      },
    },
  },
})
