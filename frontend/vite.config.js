import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker container port mapping to work
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true, // Fixes HMR in Docker on some systems (Windows/WSL/older Macs)
    },
  },
})
