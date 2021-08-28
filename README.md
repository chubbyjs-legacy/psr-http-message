# psr-http-message

## Description

Common Http-message Interface ([PHP FIG][2] [PSR-7][3]).

This are the differences to the PHP version:
 * `ServerRequestInterface` does not contain `getServerParams` and `withUploadedFiles` / `getUploadedFiles`
 * `StreamInterface` is missing, duplex streams are used for `getBody` on `MessageInterface`.
 * `UploadedFileInterface` is missing

## Requirements

 * node: 12

## Installation

Through [NPM](https://www.npmjs.com) as [@chubbyjs/psr-http-message][1].

```sh
npm i @chubbyjs/psr-http-message@1.0.2
```

## Copyright

Typescript:
 * 2021 Dominik Zogg

PHP:
 * 2014 PHP Framework Interoperability Group

[1]: https://www.npmjs.com/package/@chubbyjs/psr-http-message

[2]: https://www.php-fig.org/
[3]: https://www.php-fig.org/psr/psr-7/
