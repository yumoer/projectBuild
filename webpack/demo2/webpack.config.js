const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

/*
得到指定目录(项目下)的绝对路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

/*
webpack配置
 */
module.exports = { // 配置对象
  // 入口
  entry: './src/index.js', // 入口js的相对路径
  // 出口
  output: {
    // __dirname: 当前文件所在目录的绝对路径
    path: resolve('dist'),  // 指定文件夹的绝对路径(所有生成的文件的基本路径)
    filename: 'bundle.js'
  },
  // 模块加载器
  module: {
    rules: [
      // 加载js  es6->es5
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      // 加载css,
      {
        test: /\.css$/,
        // css文件-->js文件-->页面的<style>
        // 需要先执行css(), 再执行style()
        // style(css(css文件))
        use: ['style-loader', 'css-loader'],
      },
      // 加载img
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlPlugin({ // 配置对象
      template: 'index.html', // 当前目录下找
      filename: 'index.html', // 生成到
      inject: true // 向页面中自动引入打包生成的js/css
    })
  ]
}