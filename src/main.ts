/**
 * The module for running the program in the right order
 * @module main
 */

import { Options } from '@src/interfaces/options.d';
import { checkTypeOptions, checkExistenceMandatoryOptions, printOptions } from '@src/options';
import { isDirectory } from '@src/libs/checker';
import { decrypt, encrypt } from '@src/cryptography';
import { logger } from '@src/libs/logger';
import * as fs from 'fs';
import path from 'path';

/**
 * Encrypt or decrypt the file following the options
 * @param options The options of the application
 * */
export const main = async (options: Options) => {
  checkExistenceMandatoryOptions(options);
  checkTypeOptions(options);
  printOptions(options);
  // Decrypt or Encrypt the files
  const fc = options.isDecrypt ? decrypt : encrypt;

  // Check if it's a directory
  if (isDirectory(options.inputFile)) {

    // Create a folder if it's does not exist
    if (!fs.existsSync(options.outputFile)) {
      fs.mkdirSync(options.outputFile)
    }

    // Execute the encryption for every files inside the folder
    const files = fs.readdirSync(options.inputFile);
    for (const file of files) {
      const optionsTmp = {
        inputFile: './' + path.join(options.inputFile, file),
        outputFile: './' + path.join(options.outputFile, file),
        secret: options.secret,
        isDecrypt: options.isDecrypt
      }
      await fc(optionsTmp);
    };
  } else {
    await fc(options);
  }
  logger.info('\nOperation completed !\n', { color: 'green' });
  process.exit(0);
};

export default main;
