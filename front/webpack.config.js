const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV;

const config = {
  mode: NODE_ENV,
  entry: './src/main.js',
  output: {
    filename: '[name].[hash:7].js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          mangle:{
            keep_fnames: true
          }
        }
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              "@babel/env", 
              {
                modules: false,
                targets: {
                  "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                }
              }
            ],
          ],
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': '/srv/src',
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};
module.exports = config;
