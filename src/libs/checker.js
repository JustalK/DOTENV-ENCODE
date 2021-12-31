const fs = require('fs')

module.exports = {
  /**
   * Check if a string is valid
   * @param {string} o Check if o exists and is a string
   * @return {boolean} Test if a string is valid
   **/
  validString: (o, errorMessage) => {
    if(!o && typeof (o) !== 'string') {
      throw errorMessage
    }
  },
  /**
   * Check if a file exist
   * @param {File} f Check if the file f exists
   * @return {boolean} Test if a file exists
   **/
  validFile: (f, errorMessage) => {
    if(!f && !fs.existsSync(f)) {
      throw errorMessage
    }
  }
}
