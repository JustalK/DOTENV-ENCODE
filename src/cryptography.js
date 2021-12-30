const crypto = require('crypto')
const fs = require('fs')
const { validOption } = require('')

module.exports = {
  encrypt: ({ inputFile, outputFile, secret }) => {
    if (!secret || typeof (secret) !== 'string') throw 'No SecretKey provided.'

    console.log(options);
  },
  decrypt: (options) => {
    console.log(options);
  },
};
