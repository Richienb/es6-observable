# es6-observable [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/es6-observable/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/es6-observable)

An Observable ponyfill. Re-export of [core-js-pure](https://github.com/zloirock/core-js).

[![NPM Badge](https://nodei.co/npm/es6-observable.png)](https://npmjs.com/package/es6-observable)

## Install

```sh
npm install es6-observable
```

## Usage

```js
const Observable = require("es6-observable");

const observable = new Observable(observer => {
	observer.next("Hello World!")
})
```

## API

### Observable

See: https://github.com/tc39/proposal-observable.
