const { validString, validFile } = require('@src/libs/checker');
const ERRORS = require('@src/constants/errors');

module.exports = {
  /**
   * Get the options from the args passed in the command
   * @param {Object} args The arguments sent in the command
   * @return {Result} return the options without any checking
   * */
  readOptions: (argv) => {
    const inputFile = argv._[0];
    const outputFile = argv.outputFile || argv.o;
    const secret = argv.secret || argv.s;
    const isDecrypt = argv.decrypt || argv.d;

    return {
      inputFile, outputFile, secret, isDecrypt,
    };
  },
  /**
   * Check the options passed to the program
   * @param {string} inputFile Path to the input File
   * @param {string} outputFile Path to the output File
   * @param {string} secret Password of the encryption
   * */
  checkOptions: ({ inputFile, outputFile, secret }) => {
    validFile(inputFile, ERRORS.NO_INPUT_FILE);
    validString(outputFile, ERRORS.NO_OUTPUT_FILE);
    validString(secret, ERRORS.NO_SECRET_KEY);
  },
};
