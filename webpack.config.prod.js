const path = require('path');
const webpack = require('webpack');

module.exports = {
 devtool: 'cheap-module-source-map',
 entry: './src/index',
 output: {
   path: path.join(__dirname, 'dist'),
   filename: 'bundle.js',
   publicPath: '/static/'
 },
 module: {
     loaders: [
         {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
         {test: /(\.css)$/, loaders: ['style', 'css']}
     ]
 }
};
