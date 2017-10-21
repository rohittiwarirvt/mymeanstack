const { resolve } = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.tsx'
  ],
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules:
    [
      { test: /\.tsx?$/, exclude: /node_modules/, use: ['babel-loader','ts-loader'] }
    ]
  },
  context: resolve(__dirname, '../src'),
  devServer: {
    contentBase: resolve(__dirname, '../src'),
    hot: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin()
  ]
}
