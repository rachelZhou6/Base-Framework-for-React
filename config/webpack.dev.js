const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const { getIP, root } = require('./webpack.util');

module.exports = webpackMerge(common, {
  mode: 'development',
  output: {
    path: root(),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    host: getIP(),
    open: true,
    openPage: 'test',
    publicPath: '/',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
