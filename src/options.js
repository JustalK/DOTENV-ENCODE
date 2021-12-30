module.exports = {
  /**
   * Get the options from the args passed in the command
   * @param {Object} args The arguments sent in the command
   * @return {Result} return the options without any checking
   **/
  readOptions: (args) => {
    const inputFile = argv._[0];
    const outputFile = argv.outputFile || argv.o;
    const secret = argv.secret || argv.s;
    const isDecrypt = argv.decrypt || argv.d;

    return { inputFile, outputFile, secret }
  },
  /**
   * Check the options
   **/
  checkOptions: (options) => {
    const inputFile = argv._[0];
    const outputFile = argv.outputFile || argv.o;
    const secret = argv.secret || argv.s;
    const isDecrypt = argv.decrypt || argv.d;

    return { inputFile, outputFile, secret }
  }
};
