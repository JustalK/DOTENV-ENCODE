/**
 * JSON representation of the options in the program
 */
export interface Options {
  /**
   * The path of the file from where we gonna do our process
   */
  inputFile: string;
  /**
   * The path of the file where we gonna send the result
   */
  outputFile: string;
  /**
   * The secret uses for the encoding
   */
  secret: string;
  /**
   * True if we want to decrypt or else encryption
   */
  isDecrypt: boolean;
}
