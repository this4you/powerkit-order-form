import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/powerkit-order-form/',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'orderForm.js',
        assetFileNames: 'orderForm.css',
        chunkFileNames: "orderFormChunk.js",
        manualChunks: undefined,
      }
    }
  },
  plugins: [react()],
})
