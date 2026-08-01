import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const inlineProductionCss = () => ({
  name: 'inline-production-css',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(html, context) {
      const cssAssets = Object.values(context.bundle || {}).filter(
        (asset) => asset.type === 'asset' && asset.fileName.endsWith('.css')
      )

      for (const asset of cssAssets) {
        const escapedName = asset.fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const stylesheet = new RegExp(`<link[^>]+href=["']/${escapedName}["'][^>]*>`)
        html = html.replace(stylesheet, `<style>${asset.source}</style>`)
        delete context.bundle[asset.fileName]
      }

      return html
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineProductionCss()],
  server: {
    port: 3000,
    open: true
  }
})
