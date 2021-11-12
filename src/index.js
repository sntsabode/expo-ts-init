#!/usr/bin/env node

const { default: Core } = require('./core/core')
const { askAndWait } = require('./core/utils')

async function main() {
  const cwd = process.cwd()

  console.log('Please enter you app\'s name...')
  const appName = await askAndWait()

  const core = new Core(cwd, appName)
  const exitCode = await core.main()

  process.exit(exitCode)
}

(async () => main())()
