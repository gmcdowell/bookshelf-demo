/**
 * Created by greg on 16/03/16.
 */

// enable Babel transpilation of all migrations and seed when run from cmd line
require('babel-core/register');

var
  //path = require('path'),
  fs = require('fs'),
  nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
  entry: './src/init.js',
  target: 'node',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /test/, /migrations/, /seeds/, /build/],
        loader: 'babel-loader'
      }
    ]
  },
  externals: nodeModules,
  resolve: {
    extensions: ['', '.js', '.json']
  }
};