#! /usr/bin/env node

require('module-alias/register');
const argv = require('minimist')(process.argv.slice(2));
const { readOptions, checkOptions, checkExistenceMandatoryOptions } = require('@src/options');
const { decrypt, encrypt } = require('@src/cryptography');

// Read and valid the options
const options = readOptions(argv);
checkExistenceMandatoryOptions(options);
checkOptions(options);

// Decrypt or Encrypt the files
const fc = options.isDecrypt ? decrypt : encrypt;
fc(options);
