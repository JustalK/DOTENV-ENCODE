#! /usr/bin/env node

require('module-alias/register');
const argv = require('minimist')(process.argv.slice(2));
const { decrypt, encrypt } = require('@src/cryptography');

const inputFile = argv._[0];
const outputFile = argv.outputFile || argv.o;
const secret = argv.secret || argv.s;
const isDecrypt = argv.decrypt || argv.d;

const fc = isDecrypt ? decrypt : encrypt;
fc({ inputFile, outputFile, secret });
