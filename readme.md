# canibekiked-api

> API for [canibekiked](https://github.com/parro-it/canibekiked).

[![Travis Build Status](https://img.shields.io/travis/parro-it/canibekiked-api.svg)](http://travis-ci.org/parro-it/canibekiked-api)
[![NPM module](https://img.shields.io/npm/v/canibekiked-api.svg)](https://npmjs.org/package/canibekiked-api)
[![NPM downloads](https://img.shields.io/npm/dt/canibekiked-api.svg)](https://npmjs.org/package/canibekiked-api)

# Installation

```bash
npm install --save canibekiked-api
```

## Usage

```js
  import canibekiked from 'canibekiked-api';
  const results = canibekiked();

  results.on('package-checking', ({ name }) => {
    // name => name of one package that is being checked
  });

  results.on('package-checked', res => {
    // res => results object of package check if failed, or false
    // is package is not registered
  });

  results.on('end', (passed, failed) => {
    // passed => number of packages not trademarked
    // failed => array of details for trademarked packages
  });

  const checked = results.start();
  // checked => promise resolved on check end
```

# License

The MIT License (MIT)

Copyright (c) 2016 parro-it
