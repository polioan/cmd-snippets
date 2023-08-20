#!/usr/bin/env node

import fs from 'node:fs'
import { SAVE_PATH } from './constants'
import { execSnippet, getAllSnippetsNames } from './execSnippet'
import { error } from './helpers'

if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH)
}

const action = process.argv[2]

if (action === 'list') {
  for (const name of getAllSnippetsNames()) {
    console.log(name)
  }
  process.exit(0)
}

if (!action) {
  error('Provide snippet name!')
}

execSnippet(action)
