const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        // When loading each of these filetypes...
        {
            test: /\.jsx?$/,
            loader: 'babel-loader'
        },
        {
            test: /\.js?$/,
            loader: 'babel-loader'
        }
    ]
  }
};