#! /usr/bin/env node

require('module-alias/register');
const argv = require('minimist')(process.argv.slice(2));
const { readOptions } = require('@src/options');
const { decrypt, encrypt } = require('@src/cryptography');

// Read the options
const options = readOptions(args)

 // Decrypt or Encrypt the files
const fc = isDecrypt ? decrypt : encrypt;
fc(options);
