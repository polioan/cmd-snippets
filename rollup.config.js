import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

/**
 * @returns {import('rollup').Plugin}
 */
function stripNodePrefix() {
  return {
    name: 'strip-node-prefix',
    resolveId(source) {
      if (source.startsWith('node:')) {
        return {
          id: source.replace('node:', ''),
          external: true,
        }
      }
      return null
    },
  }
}

export default defineConfig({
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    sourcemap: false,
    banner: '#!/usr/bin/env node',
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    stripNodePrefix(),
    terser({}),
  ],
})
