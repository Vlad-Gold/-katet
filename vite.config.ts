import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/-katet/',
  plugins: [
    react(),
    {
      name: 'github-pages-404',
      closeBundle() {
        const dist = join(process.cwd(), 'dist')
        const index = join(dist, 'index.html')
        if (existsSync(index)) {
          copyFileSync(index, join(dist, '404.html'))
        }
        writeFileSync(join(dist, '.nojekyll'), '')
      },
    },
  ],
})
