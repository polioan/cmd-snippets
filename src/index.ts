#!/usr/bin/env node

import fs from 'node:fs'
import { SAVE_PATH } from './constants'
import { execSnippet } from './execSnippet'
import { error } from './helpers'

if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH)
}

if (!process.argv[2]) {
  error('Provide snippet name!')
}

execSnippet(process.argv[2])
