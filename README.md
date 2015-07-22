[![Build Status][travis-image]][travis-url]

ruby-operators
==============
Simple app to show different Ruby operators with their funny names.


Prerequisites
===
- node
- webpack-dev-server (Install with `npm install -g webpack-dev-server`)
- webpack (Install with `npm install -g webpack`)

Run
===

### Run in development mode
```
webpack-dev-server --config webpack.config.js
```

Runs dev webserver at http://localhost:8080/webpack-dev-server/

### Generate production build
```
webpack --config webpack.production.config.js
```

Serve project under a webserver

Contribute
==========
Edit [operators.js](https://github.com/anildigital/ruby-operators/blob/master/app/config/operators.js) and send pull request.


[travis-image]: https://api.travis-ci.org/anildigital/ruby-operators.svg?branch=master
[travis-url]: https://travis-ci.org/anildigital/ruby-operators
