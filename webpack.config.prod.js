const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
 devtool: 'cheap-module-source-map',
 entry: './src/index',
 output: {
   path: path.join(__dirname, 'dist'),
   filename: 'bundle.js',
   publicPath: '/static/'
 },
 plugins:  [
    new webpack.DefinePlugin({ "process.env": {  NODE_ENV: JSON.stringify("production") }}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
 module: {
     loaders: [
         {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
         {test: /(\.css)$/, loaders: ['style', 'css']}
     ]
 }
};
