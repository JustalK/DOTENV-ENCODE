#! /usr/bin/env node

import { readOptions } from '@src/options';
import { main } from '@src/main';
import readline from 'readline';

require('module-alias/register');
const argv = require('minimist')(process.argv.slice(2));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Read and valid the options
const options = readOptions(argv);

if (options.secret) {
  main(options);
} else {
  rl.question('Secret key:', (secret: string) => {
    options.secret = secret;
    main(options);
  });
}

rl.on('close', () => {
  process.exit(0);
});
