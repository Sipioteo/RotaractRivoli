import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      host: true, // Needed for Docker container port mapping to work
      strictPort: true,
      port: 5173,
      allowedHosts: [env.ALLOWED_HOSTS],
      watch: {
        usePolling: true, // Fixes HMR in Docker on some systems (Windows/WSL/older Macs)
      },
    },
  }
})
