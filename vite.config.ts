import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/-katet/',
  plugins: [
    react(),
    {
      name: 'github-pages-404',
      closeBundle() {
        const index = fileURLToPath(new URL('./dist/index.html', import.meta.url))
        const fallback = fileURLToPath(new URL('./dist/404.html', import.meta.url))
        const nojekyll = fileURLToPath(new URL('./dist/.nojekyll', import.meta.url))
        if (existsSync(index)) {
          copyFileSync(index, fallback)
        }
        writeFileSync(nojekyll, '')
      },
    },
  ],
})
