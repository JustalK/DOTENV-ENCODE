# DOTENV-ENCODE


## Installation

```bash
$ npm install dotenv-encode
```

## Description

Dotenv-encode is a package for encrypting or decrypting a file or folder using a password.

* **Secured**: It uses the **aes256** algorythm from the `crypto` package for encrypting a file or folder with a key.
* **Fast and flexible**: The command line only take few arguments and can be adapted easily.

## Example

#### Encryption

```bash
$ npm dotenv-encode ./env/test.env -o ./encrypted/test.env -s MySecretKey
## Without secret/s, a prompt will ask for the secret
$ npm dotenv-encode ./env/test.env -o ./encrypted/test.env
```

This command will encrypt the content of the file `./env/test.env` in the file `./encrypted/test.env` with `MySecretKey` as password.

You can also encrypt all the file in a folder :

```bash
$ npm dotenv-encode ./env -o ./env_encrypted -s MySecretKey
```

#### Decryption

```bash
$ npm dotenv-encode ./env/test.env -o ./encrypted/test.env -s MySecretKey -d
```

This command will decrypt the content of the file `./env/test.env` in the file `./encrypted/test.env` with `MySecretKey` as password.

## Usage

```bash
$ dotenv-encode <path-input-file> --options <VALUE>
```

| Options                  | Short | Mandatory | Description                                                                          |
| ------------------------ | ----- | --------- | ------------------------------------------------------------------------------------ |
| --out <file-path>        | -o    | yes       | The path of the result file or folder (it will be created if does not exist)         |
| --secret <password>      | -s    | no        | Specify the password which would be used to encrypt or decrypt the file.             |
| --decrypt                | -d    | no        | If present, the command will decrypt the input file                                  |

In case the `secret` is specified, a prompt will ask for the secret.<br />
The `decrypt` option does not take any parameters.
The `path-input-file` is the file on which we will get the data from.

## Contributing

The main purpose of this repository is to continue evolving dotenv-encode, making it faster and easier to use. Development of this package happens in the open on GitHub, and I am grateful to anyone contributing bugfixes and improvements. Read below to learn how you can take part in improving **Dotenv-encode**.

### Sending a PR

I am monitoring for pull requests. I will review any pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

* Actual tests are not break
* Documentation is still compiling
* Code coverage is still higher than 85%
* Your modification has been tested properly
* Your modification has been documented

### License

Dotenv-encode is [MIT licensed](./LICENSE).
