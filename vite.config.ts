import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/-katet/',
  plugins: [
    react(),
    {
      name: 'github-pages-nojekyll',
      closeBundle() {
        writeFileSync(join(process.cwd(), 'dist', '.nojekyll'), '')
      },
    },
  ],
})
