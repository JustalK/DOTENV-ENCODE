#! /usr/bin/env node

require('module-alias/register');
const argv = require('minimist')(process.argv.slice(2));
import { readOptions, checkTypeOptions, checkExistenceMandatoryOptions } from '@src/options';
import { decrypt, encrypt } from '@src/cryptography';

// Read and valid the options
const options = readOptions(argv);
checkExistenceMandatoryOptions(options);
checkTypeOptions(options);

// Decrypt or Encrypt the files
const fc = options.isDecrypt ? decrypt : encrypt;
fc(options);
