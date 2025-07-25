// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'ciahacked.me',
      'www.ciahacked.me',
      'localhost'
    ]
  },
  server: {
    port: 5173
  }
})