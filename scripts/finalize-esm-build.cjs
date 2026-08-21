// Mark the ESM emit as ESM: files in lib/esm/ use import/export syntax but
// keep the .js extension, so Node needs a nearest-package.json type marker.
const { writeFileSync } = require('node:fs')

writeFileSync('lib/esm/package.json', `${JSON.stringify({ type: 'module' })}\n`)
