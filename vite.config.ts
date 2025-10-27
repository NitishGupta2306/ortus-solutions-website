import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js and related libraries into separate chunk
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Split GSAP into separate chunk
          'gsap': ['gsap'],
          // Split other heavy dependencies
          'vendor': ['react', 'react-dom', 'react-hook-form', 'zod', 'lenis'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild minifier (faster and built-in)
    minify: 'esbuild',
  },
})
