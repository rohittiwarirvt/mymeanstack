const { resolve } = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
  entry:[
    'webpack-hot-middleware/client?http://local.fblearn.com:9191',
    'webpack/hot/only-dev-server',
    './index.tsx'
  ],
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: "[name].[hash:10].js",
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules:
    [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader','ts-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
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
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      filename: 'index.html',
      inject: 'app',
      template: "../dist/index.html",
    }),
    new ExtractTextPlugin({filename: 'css/app.[contenthash:10].css', disable: false, allChunks: true }),
    //new WriteFilePlugin({useHashIndex: true}),
    new webpack.DefinePlugin({
        //Set the environment based on setting a node environment variable (ex: 'ENV=prd webpack')
        ENV: JSON.stringify(`${process.env.ENV}`)
    })
  ]
}
