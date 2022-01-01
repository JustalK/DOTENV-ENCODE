import test from 'ava';
import {
	readOptions,
	checkExistenceMandatoryOptions,
	checkTypeOptions,
	printOptions
} from '@src/options';

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

test('[OPTIONS] Testing the mandatory parameters checkers', t => {
	const options = {
		inputFile: 'env/test.env',
		outputFile: 'env_encoded/test.env',
		secret: 'MySecret',
		isDecrypt: true
	}
	t.notThrows(() => {
		checkExistenceMandatoryOptions(options);
	})
});

test('[OPTIONS] Testing the mandatory parameters checkers - error', t => {
	const options = {
		inputFile: '',
		outputFile: 'env_encoded/test.env',
		secret: 'MySecret',
		isDecrypt: true
	}
	const error = t.throws(() => {
		checkExistenceMandatoryOptions(options);
	})

	t.is(error.message, 'No inputFile provided.');
});

test('[OPTIONS] Testing the type parameters checkers', t => {
	const options = {
		inputFile: 'env/test.env',
		outputFile: 'env_encoded/test.env',
		secret: 'MySecret',
		isDecrypt: true
	}
	t.notThrows(() => {
		checkTypeOptions(options);
	})
});

test('[OPTIONS] Testing the type parameters checkers - error file existence', t => {
	const options = {
		inputFile: 'env/idontexist.env',
		outputFile: 'env_encoded/test.env',
		secret: 'MySecret',
		isDecrypt: true
	}
	const error = t.throws(() => {
		checkTypeOptions(options);
	})

	t.is(error.message, 'The inputFile provided does not exist.');
});

test('[OPTIONS] Testing the logger of info', t => {
	const options = {
		inputFile: 'env/test.env',
		outputFile: 'env_encoded/test.env',
		secret: 'MySecret',
		isDecrypt: true
	}

	t.notThrows(() => {
		printOptions(options);
	})
});
