import { Options } from '@src/interfaces/options.d';
import { checkTypeOptions, checkExistenceMandatoryOptions } from '@src/options';
import { decrypt, encrypt } from '@src/cryptography';

export const main = async (options: Options) => {
  checkExistenceMandatoryOptions(options);
  checkTypeOptions(options);
  // Decrypt or Encrypt the files
  const fc = options.isDecrypt ? decrypt : encrypt;
  await fc(options);
  process.exit(0);
};

export default main;
