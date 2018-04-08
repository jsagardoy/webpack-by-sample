var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: {
    app: './students.tsx',
    appStyles: [
      './mystyles.scss',
    ],
    vendor: [
      'jquery',
      'react',
      'react-dom',
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ]
  },
  output: {
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: './img/[hash].[name].[ext]'
          }
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // destination file ./dist
      template: 'index.html', // name of origina html file   
      chunksSortMode: 'manual',
      chunks: ['vendor', 'vendorStyles', 'appStyles', 'app']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].[chunkhash].css",
      chunkFilename: "[id].css"
    })
  ]
}