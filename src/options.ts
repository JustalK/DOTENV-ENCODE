/**
 * The module for managing the options/parameters
 * @module options
 */

import { validExistence, validTypeString, validFile } from '@src/libs/checker';
import { logger } from '@src/libs/logger';
import ERRORS from '@src/constants/errors';
import { Options } from '@src/interfaces/options.d';
import { Argv } from '@src/interfaces/argv.d';

/**
 * Get the options from the args passed in the command
 * @param args The arguments sent in the command
 * @return {Result} return the options without any checking
 * */
export const readOptions = (argv: Argv): Options => {
  const inputFile = argv._[0];
  const outputFile = argv.outputFile || argv.o;
  const secret = argv.secret || argv.s;
  const isDecrypt = argv.decrypt || argv.d;

  return {
    inputFile, outputFile, secret, isDecrypt,
  };
};

/**
 * Check if mandatory options has been given in the command
 * @param {string} inputFile Path to the input File
 * @param {string} secret Password of the encryption
 * */
export const checkExistenceMandatoryOptions = ({ inputFile, secret }: Options) => {
  validExistence(inputFile, ERRORS.NO_INPUT_FILE);
  validExistence(secret, ERRORS.NO_SECRET_KEY);
};

/**
 * Check the type of parameters passed to the program
 * @param {string} inputFile Path to the input File
 * @param {string} outputFile Path to the output File
 * @param {string} secret Password of the encryption
 * */
export const checkTypeOptions = async ({ inputFile, outputFile, secret }: Options) => {
  validFile(inputFile, ERRORS.WRONG_INPUT_FILE);
  validTypeString(secret, ERRORS.WRONG_SECRET_KEY);
  validTypeString(outputFile, ERRORS.WRONG_OUTPUT_FILE);
};

/**
 * Print the parameters of the encryption/decryption in the terminal
 * @param {string} inputFile Path to the input File
 * @param {string} outputFile Path to the output File
 * @param {string} secret Password of the encryption
 * @param {boolean} isDecrypt True if the process is a decryption, or else false
 * */
export const printOptions = ({
  inputFile, outputFile, secret, isDecrypt,
}: Options) => {
  logger.info(`Current process: ${isDecrypt ? 'Decryption' : 'Encryption'}`, { color: 'cyan' });
  logger.info(`inputFile: ${inputFile}`, { color: 'cyan' });
  logger.info(`outputFile: ${outputFile}`, { color: 'cyan' });
  logger.info(`Secret: ${secret}`, { color: 'cyan' });
};
