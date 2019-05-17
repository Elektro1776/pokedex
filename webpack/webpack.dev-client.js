const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin'); // here so you can see what chunks are built
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    vendor: ['react', '@hot-loader/react-dom'],
    main: ['webpack-hot-middleware/client?reload=true', 'react-hot-loader/patch', './packages/client/index.jsx']
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true
    }
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
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          // { loader:  "style-loader"}, // creates style nodes from JS strings
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
            }
          },
          {
            loader: 'css-loader'
            // options: {
            //   modules: true
            // }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './config')
              }
            }
          }, // translates CSS into CommonJS
          { loader: 'sass-loader' } // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      hot: true,
      filename: '[name].css',
      chunkFilename: '[id].chunk.css'
      // orderWarning: true // Disable to remove warnings about conflicting order between imports
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
