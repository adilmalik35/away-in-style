import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/away-in-style/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})