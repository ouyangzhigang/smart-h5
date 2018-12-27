#!/usr/bin/env node

const spawn = require('cross-spawn')
const program = require('commander')

program.parse(process.argv)

const result = spawn.sync(
  'node', [require.resolve('./start0')].concat(program.args), {
    stdio: 'inherit'
  }
)
process.exit(result.status)
