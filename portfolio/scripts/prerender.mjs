import { createServer } from 'vite'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const appHtml = render()

  const templatePath = resolve(root, 'dist/index.html')
  const template = readFileSync(templatePath, 'utf-8')
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  writeFileSync(templatePath, html)

  console.log('✅  Prerendered index.html')
} catch (e) {
  console.error('❌  Prerender failed:', e)
  process.exit(1)
} finally {
  await vite.close()
}
