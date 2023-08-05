import os from 'node:os'
import path from 'node:path'

export function error(message: string): never {
  console.error(message)
  process.exit(1)
}

export function getAppDataPath() {
  const platform = os.platform()
  if (platform.startsWith('win')) {
    return path.join(os.homedir(), 'AppData', 'Roaming')
  }
  if (platform.startsWith('linux')) {
    return path.join(os.homedir(), '.config')
  }
  if (platform.startsWith('darwin')) {
    return path.join(os.homedir(), 'Library', 'Application Support')
  }
  if (process.env['APPDATA']) {
    return process.env['APPDATA']
  }
  error(`Can't find appdata folder for platform - "${platform}"`)
}

export function arrayHasDuplicates<T>(array: T[]) {
  return new Set(array).size !== array.length
}
