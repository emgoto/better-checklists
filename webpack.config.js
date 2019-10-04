const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/docs/js'
  }
}



