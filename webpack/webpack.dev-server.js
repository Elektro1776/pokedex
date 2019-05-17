const path = require('path');
const fs = require('fs');
const WriteFilePlugin = require('write-file-webpack-plugin');

const webpack = require('webpack');

const res = p => path.resolve(__dirname, p);

const nodeModules = res('../node_modules');
const externals = fs
  .readdirSync(nodeModules)
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

externals['@hot-loader/react-dom'] = 'commonjs @hot-loader/react-dom';

module.exports = {
  name: 'server',
  devtool: 'source-map',
  target: 'node',
  entry: ['regenerator-runtime/runtime.js', './packages/server/middleware/render.js'],
  mode: 'development',
  externals: externals,
  output: {
    filename: '[name]-server.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          // { loader:  "style-loader"}, // creates style nodes from JS strings

          {
            loader: 'css-loader',
            options: {
              modules: true
              // localIdentName: '[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './config')
              }
            }
          }, // translates CSS into CommonJS
          {
            loader: 'sass-loader'
          } // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
