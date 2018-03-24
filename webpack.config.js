var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./students.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // destination file ./dist
      template: 'index.html', // name of origina html file
      hash: true,
    }),
  ]
}
