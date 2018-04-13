/*
webpack开发环境的配置
 */
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  // 出口
  output: {
    filename: '[name].js'   // app.js
  },

  // 模块加载器
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // 开启开发环境下的: sourceMap调试
  devtool: 'cheap-module-eval-source-map',
})