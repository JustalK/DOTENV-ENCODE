# DOTENV-ENCODE


## Installation

```bash
$ npm install @latsuj/dotenv-encode
```

## Description

Dotenv-encode encrypts or decrypts an entire file with a password.

It uses the **aes256** algorythm from the `crypto` package for encrypting a file with a key. The encrypted file can then only be decrypted with the exact same key.

## Example

#### Encryption

```bash
$ npm dotenv-encode ./env/test.env -o ./encrypted/test.env -s MySecretKey
```

#### Decryption

```bash
$ npm dotenv-encode ./env/test.env -o ./encrypted/test.env -s MySecretKey -d
```

## Motivation

I created this package because I wanted an easy way to keep my environment file in my template on github. I have lost some environment files when my computer broke and rebuilding them took me quite an amount of time.

I have searched on **npm** some other packages doing the same and I rapidly get dissapointed. Either, the packages I found was not allowing you to encrypt the entire file or either the packages was not maintained anymore. I also found some packages where the quality was way below my standard. I decided to make my own which will give me full control over it.

## Contributions
