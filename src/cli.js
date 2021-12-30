#! /usr/bin/env node

const cryptography = require('./cryptography');
const argv = require('minimist')(process.argv.slice(2));

const inputFile = argv._[0]
const outputFile = argv.outputFile || argv.o
const secret = argv.secret || argv.s
const decrypt = argv.decrypt || argv.d

if (decrypt) {
  cryptography.decrypt({ inputFile, outputFile, secret });
} else {
  cryptography.encrypt({ inputFile, outputFile, secret });
}
