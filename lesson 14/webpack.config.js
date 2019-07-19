'use strict';
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/bundle/script.js',
  output: {
    path: path.resolve(__dirname, 'js/bundle'),
    filename: "build.js"
  }
}
