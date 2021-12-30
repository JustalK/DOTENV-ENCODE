import { Options } from '@src/interfaces/options';
import { IV_LENGTH, ALGORITHM_AES_256, ALGORITHM_SHA_256, FORMAT_UTF8 } from '@src/constants/cryptography'
import * as crypto from 'crypto';
import * as fs from 'fs';

export const encrypt = ({ secret, inputFile, outputFile }: Options) => {
  try {
    const secretKey = crypto.createHash(ALGORITHM_SHA_256).update(String(secret)).digest()
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv(ALGORITHM_AES_256, secretKey, iv)
    const output = fs.createWriteStream(outputFile)
    output.write(iv)
    fs.createReadStream(inputFile).pipe(cipher).pipe(output)
  } catch (error) {
    console.log(error);
  }
}

export const decrypt = ({ secret, inputFile, outputFile }: Options) => {
  try {
    const fileBuffer = fs.readFileSync(inputFile)
    const iv = fileBuffer.slice(0, IV_LENGTH)
    const ciphertext = fileBuffer.slice(IV_LENGTH, fileBuffer.length)
    const key = crypto.createHash(ALGORITHM_SHA_256).update(String(secret)).digest()
    const decipher = crypto.createDecipheriv(ALGORITHM_AES_256, key, iv)
    let decrypt = Buffer.concat([decipher.update(ciphertext), decipher.final()])
    const output = fs.createWriteStream(outputFile)
    output.write(decrypt.toString(FORMAT_UTF8))
  } catch (error) {
    console.log(error);
  }
}
