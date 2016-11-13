# jstransformer-precss

[PreCSS](https://github.com/jonathantneal/precss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-precss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-precss)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-precss/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-precss)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-precss/master.svg)](http://david-dm.org/jstransformers/jstransformer-precss)
[![NPM version](https://img.shields.io/npm/v/jstransformer-precss.svg)](https://www.npmjs.org/package/jstransformer-precss)

## Installation

    npm install jstransformer-precss

## API

```js
var precss = require('jstransformer')(require('jstransformer-precss'))

var input = `$blue: #056ef0
.menu_link {
    background: $blue;
}`

precss.render(input).body
//=> `.menu_link {
    background: #056ef0;
}`
```

## License

MIT
