import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  //const env = loadEnv(mode, process.cwd(), '') TODO include env variables with the site
  let baseURL = ''
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
