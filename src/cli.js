#! /usr/bin/env node

require('module-alias/register');
const argv = require('minimist')(process.argv.slice(2));
const cryptography = require('@src/cryptography');

const inputFile = argv._[0];
const outputFile = argv.outputFile || argv.o;
const secret = argv.secret || argv.s;
const decrypt = argv.decrypt || argv.d;

const options = { inputFile, outputFile, secret };
if (decrypt) {
  cryptography.decrypt(options);
} else {
  cryptography.encrypt(options);
}
