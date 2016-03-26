# canibekikked-api

> API for [canibekikked](https://github.com/parro-it/canibekikked).

[![Travis Build Status](https://img.shields.io/travis/parro-it/canibekikked-api.svg)](http://travis-ci.org/parro-it/canibekikked-api)
[![NPM module](https://img.shields.io/npm/v/canibekikked-api.svg)](https://npmjs.org/package/canibekikked-api)
[![NPM downloads](https://img.shields.io/npm/dt/canibekikked-api.svg)](https://npmjs.org/package/canibekikked-api)

# Installation

```bash
npm install --save canibekikked-api
```

# Usage

```js
  import canibekikked from 'canibekikked-api';
  const results = canibekikked();

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
