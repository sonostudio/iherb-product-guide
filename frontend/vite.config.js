import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // Makes VITE_CLIENT available as a global in index.html's inline script
    __VITE_CLIENT__: JSON.stringify(process.env.VITE_CLIENT || 'dhc'),
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})