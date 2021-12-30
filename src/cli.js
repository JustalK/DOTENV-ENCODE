#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const outputFile = argv.outputFile || argv.o
const inputFile = argv._[0]

const { secret } = argv;

console.log(argv, secret)
