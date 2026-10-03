import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Only publish the explicitly selected, browser-safe settings below.
  // Never expose all loaded environment variables to client code.
  const env = loadEnv(mode, process.cwd(), '')
  const publicEnv = (name) => env[name] ?? ''

  return {
    plugins: [react()],
    define: {
      __ENQUIRY_EMAIL_ENABLED__: JSON.stringify(publicEnv('ENQUIRY_EMAIL_ENABLED')),
      __ENQUIRY_WHATSAPP_ENABLED__: JSON.stringify(publicEnv('ENQUIRY_WHATSAPP_ENABLED')),
      __API_BASE_URL__: JSON.stringify(publicEnv('API_BASE_URL')),
      __WHATSAPP_NUMBER__: JSON.stringify(publicEnv('WHATSAPP_NUMBER')),
    },
    server: { proxy: { '/api': 'http://localhost:8085' } },
  }
})
