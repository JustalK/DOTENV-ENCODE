import { Options } from '@src/interfaces/options.d';
import { checkTypeOptions, checkExistenceMandatoryOptions, printOptions } from '@src/options';
import { decrypt, encrypt } from '@src/cryptography';
import colors from 'colors/safe';

export const main = async (options: Options) => {
  checkExistenceMandatoryOptions(options);
  checkTypeOptions(options);
  printOptions(options);
  // Decrypt or Encrypt the files
  const fc = options.isDecrypt ? decrypt : encrypt;
  await fc(options);
  console.log(colors.green('\nOperation completed !\n'));
  process.exit(0);
};

export default main;
