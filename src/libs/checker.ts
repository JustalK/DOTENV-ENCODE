/**
 * The lib for managing all kind of checking of parameters
 * @module libs/checker
 */

import * as fs from 'fs';

/**
 * Check if a param has been given
 * @param {string} o The param o that gonna be check
 * @param {string} errorMessage The error message to show if the checker failed
 * */
export const validExistence = (o: string, errorMessage: string) => {
  if (!o) {
    throw new Error(errorMessage);
  }
};

/**
 * Check if a string is valid
 * @param {string} o The param o that gonna be check
 * @param {string} errorMessage The error message to show if the checker failed
 * */
export const validTypeString = (o: string, errorMessage: string) => {
  if (typeof (o) !== 'string') {
    throw new Error(errorMessage);
  }
};

/**
 * Check if a file exist
 * @param {string} f Check if the file f exists
 * @param {string} errorMessage The error message to show if the checker failed
 * */
export const validFile = (f: string, errorMessage: string) => {
  if (!fs.existsSync(f)) {
    throw new Error(errorMessage);
  }
};
