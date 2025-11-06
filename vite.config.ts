import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  let baseURL: String = ''
  if (mode == "development") {
    baseURL = "/Sync-Craft-Website/"
  } else if (mode == "production"){
    baseURL = "/"
  }
  return {
  base: baseURL,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
})
