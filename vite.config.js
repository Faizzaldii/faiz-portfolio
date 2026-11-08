
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/faiz-portfolio/',

  build: {
    target: ['safari16.0', 'ios16.0'],
    cssTarget: ['safari16.0', 'ios16.0'],
  },
})
