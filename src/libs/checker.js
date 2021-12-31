const fs = require('fs')

module.exports = {
  /**
   * Check if a param has been given
   * @param {string} o The param o that gonna be check
   **/
  validExistence: (o, errorMessage) => {
    if(!o) {
      throw errorMessage
    }
  },
  /**
   * Check if a string is valid
   * @param {string} o The param o that gonna be check
   **/
  validTypeString: (o, errorMessage) => {
    if(typeof (o) !== 'string') {
      throw errorMessage
    }
  },
  /**
   * Check if a file exist
   * @param {File} f Check if the file f exists
   **/
  validFile: (f, errorMessage) => {
    if(!fs.existsSync(f)) {
      throw errorMessage
    }
  }
}
