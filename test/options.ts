import test from 'ava';
import { readOptions } from '@src/options';

test('[OPTIONS] Testing the long parameters', t => {
	const argv = {
		_: ['env/test.env'],
		outputFile: 'env_encoded/test.env',
		secret: 'MySecret',
		decrypt: true,
	}
	const {
		inputFile,
		outputFile,
		secret,
		isDecrypt
	} = readOptions(argv);
	t.is(inputFile, 'env/test.env');
	t.is(outputFile, 'env_encoded/test.env');
	t.is(secret, 'MySecret');
	t.is(isDecrypt, true);
});


test('[OPTIONS] Testing the short parameters', t => {
	const argv = {
		_: ['env/test.env'],
		o: 'env_encoded/test.env',
		s: 'MySecret',
		d: true,
	}
	const {
		inputFile,
		outputFile,
		secret,
		isDecrypt
	} = readOptions(argv);
	t.is(inputFile, 'env/test.env');
	t.is(outputFile, 'env_encoded/test.env');
	t.is(secret, 'MySecret');
	t.is(isDecrypt, true);
});
