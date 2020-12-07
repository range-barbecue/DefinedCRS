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
    new CleanWebpackPlugin(),

  ],
  module: {
    rules: [
      {
        test: /.ejs$/,
        use: [
          {
            loader: "ejs-webpack-loader",
            options: {
              htmlmin: true
            }
          }
        ]
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              limit: 1024
            }
          }
        ]
      },
      {
        test: /.scss$/,
        use: [{
          loader: "style-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }, {
          loader: "css-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }, {
          loader: "sass-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }, {
          loader: "postcss-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }
    ]
  },
}

module.exports = config