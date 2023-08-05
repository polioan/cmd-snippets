import path from 'node:path'
import { getAppDataPath } from './helpers'
import { execSync } from 'node:child_process'

export const SAVE_PATH = path.join(getAppDataPath(), 'cmd-snippets-storage')

interface Executor {
  extensions: [string, ...string[]]
  exec: (name: string) => void
}

export const EXECUTORS: Executor[] = [
  {
    extensions: ['.js', '.cjs', '.mjs'],
    exec: name => {
      execSync(`node "${path.join(SAVE_PATH, name)}"`, { stdio: 'inherit' })
    },
  },
  {
    extensions: ['.py', '.pyw'],
    exec: name => {
      execSync(`python "${path.join(SAVE_PATH, name)}"`, { stdio: 'inherit' })
    },
  },
]
