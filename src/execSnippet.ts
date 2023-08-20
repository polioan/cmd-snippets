import path from 'node:path'
import fs from 'node:fs'
import { SAVE_PATH, EXECUTORS } from './constants'
import { arrayHasDuplicates, error } from './helpers'

function getAllSnippetsFileNames() {
  return fs
    .readdirSync(SAVE_PATH, { withFileTypes: true })
    .filter(file => file.isFile())
    .map(file => file.name)
}

export function getAllSnippetsNames(fileNames?: string[] | undefined) {
  return (fileNames ?? getAllSnippetsFileNames()).map(
    file => path.parse(file).name
  )
}

function resolveSnippetFileName(name: string) {
  const allSnippetsFileNames = getAllSnippetsFileNames()

  if (arrayHasDuplicates(getAllSnippetsNames(allSnippetsFileNames))) {
    error('Found duplicate snippets!')
  }

  const snippetFileName = allSnippetsFileNames.find(
    file => path.parse(file).name === name
  )

  if (!snippetFileName) {
    error(`Snippet "${name}" not found!`)
  }

  return snippetFileName
}

export function execSnippet(name: string) {
  const snippetFileName = resolveSnippetFileName(name)
  const ext = path.extname(snippetFileName)
  const executor = EXECUTORS.find(executor => executor.extensions.includes(ext))
  if (!executor) {
    error(`Executor for "${ext}" extension not found!`)
  }
  executor.exec(snippetFileName)
}
