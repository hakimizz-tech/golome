import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Minimal production optimizations
  build: {
    // Generate source maps for production
    sourcemap: true,
    
    // Use esbuild for minification
    minify: 'esbuild',
    
    // Improve chunking strategy for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'wouter', 'framer-motion'],
        }
      }
    }
  }
})
