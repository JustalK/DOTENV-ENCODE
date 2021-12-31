import { Options } from '@src/interfaces/options.d';
import {
  IV_LENGTH, ALGORITHM_AES_256, ALGORITHM_SHA_256, FORMAT_UTF8,
} from '@src/constants/cryptography';
import { logger } from '@src/libs/logger';
import * as crypto from 'crypto';
import * as fs from 'fs';

/**
 * Encrypt the inputFile with the secret using the aes256 algo into the outPutFile
 * @param secret The secret key for encoding
 * @param inputFile The path of the input file
 * @param outputFile The path of the output file
 * */
export const encrypt = async ({ secret, inputFile, outputFile }: Options) => new Promise((resolve) => {
  try {
    const secretKey = crypto.createHash(ALGORITHM_SHA_256).update(String(secret)).digest();
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM_AES_256, secretKey, iv);
    const output = fs.createWriteStream(outputFile);
    output.write(iv);
    fs.createReadStream(inputFile).pipe(cipher).pipe(output);

    output.on('finish', () => resolve(true));
  } catch (error) {
    logger.error(`Error:\n ${error}`, { color: 'red' });
  }
});

/**
 * Decrypt the inputFile with the secret using the aes256 algo into the outPutFile
 * @param secret The secret key for decoding
 * @param inputFile The path of the input file
 * @param outputFile The path of the output file
 * */
export const decrypt = async ({ secret, inputFile, outputFile }: Options) => new Promise((resolve) => {
  try {
    const fileBuffer = fs.readFileSync(inputFile);
    const iv = fileBuffer.slice(0, IV_LENGTH);
    const ciphertext = fileBuffer.slice(IV_LENGTH, fileBuffer.length);
    const key = crypto.createHash(ALGORITHM_SHA_256).update(String(secret)).digest();
    const decipher = crypto.createDecipheriv(ALGORITHM_AES_256, key, iv);
    const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    const output = fs.createWriteStream(outputFile);
    output.write(decrypted.toString(FORMAT_UTF8));
    output.end();

    output.on('finish', () => resolve(true));
  } catch (error) {
    logger.error(`Error:\n ${error}`, { color: 'red' });
  }
});
