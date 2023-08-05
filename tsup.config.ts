import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: 'tsconfig.json',
  minify: true,
  outDir: 'dist',
  sourcemap: false,
  replaceNodeEnv: true,
  format: ['esm'],
  dts: false,
  target: 'esnext',
  clean: true,
  platform: 'node',
  bundle: true,
})
