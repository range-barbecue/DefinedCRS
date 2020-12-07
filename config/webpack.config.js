const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //注意：最新的写法

let config = {
  mode: 'none',
  entry: {
    index: path.join(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    }),
    // 清理/dist文件夹
    new CleanWebpackPlugin()
  ]
}

module.exports = config