import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['37b5-2409-40f4-411a-a86f-3163-c579-7919-3f62.ngrok-free.app']
  }
})
