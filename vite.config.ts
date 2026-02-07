import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Custom plugin to handle figma:asset imports
const figmaAssetPlugin = {
  name: 'figma-asset-resolver',
  enforce: 'pre' as const,
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      return id
    }
    return null
  },
  load(id: string) {
    if (id.startsWith('figma:asset/')) {
      const assetPath = id.replace('figma:asset/', '')
      const localPath = path.resolve(__dirname, 'src/assets/images', assetPath)
      
      if (fs.existsSync(localPath)) {
        // Return the asset import so Vite can handle it
        return `import asset from "${localPath.replace(/\\/g, '/')}"; export default asset;`
      }

      // Return a decorative placeholder for missing Figma assets
      return `export default "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTYzZTUwMjAiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y4ZmFmYyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2YxZjVmOSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NDc0OGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZpZ21hIEFzc2V0PC90ZXh0Pjwvc3ZnPg=="`
    }
    return null
  }
}

export default defineConfig({
  base: './', // Add this line
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
