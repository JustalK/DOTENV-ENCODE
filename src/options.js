const { validExistence, validTypeString, validFile } = require('@src/libs/checker');
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
   * Check if mandatory options has been given in the command
   * @param {string} inputFile Path to the input File
   * @param {string} secret Password of the encryption
   * */
  checkExistenceMandatoryOptions: ({ inputFile, secret }) => {
    validExistence(inputFile, ERRORS.NO_INPUT_FILE);
    validExistence(secret, ERRORS.NO_SECRET_KEY);
  },
  /**
   * Check the type of parameters passed to the program
   * @param {string} inputFile Path to the input File
   * @param {string} outputFile Path to the output File
   * @param {string} secret Password of the encryption
   * */
  checkTypeOptions: ({ inputFile, outputFile, secret }) => {
    validFile(inputFile, ERRORS.WRONG_INPUT_FILE);
    validTypeString(secret, ERRORS.WRONG_SECRET_KEY);
    validTypeString(outputFile, ERRORS.WRONG_OUTPUT_FILE);
  },
};
