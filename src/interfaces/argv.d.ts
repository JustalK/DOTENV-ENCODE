/**
 * JSON representation of the arguments
 */
export interface Argv {
  /**
   * The long argument indicating the path of the output file
   */
  outputFile?: string;
  /**
   * The short argument indicating the path of the output file
   */
  o?: string;
  /**
   * The long argument indicating the secret of the encoding
   */
  secret?: string;
  /**
   * The short argument indicating the secret of the encoding
   */
  s?: string;
  /**
   * The long argument indicating the decryption process
   */
  decrypt?: boolean;
  /**
   * The short argument indicating the decryption process
   */
  d?: boolean;
  /**
   * The argument without a parameters
   */
  _: string[];
}
