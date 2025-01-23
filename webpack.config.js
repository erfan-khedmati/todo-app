const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: "development",
  target: 'electron-main',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Add .jsx here
    alias: {
      path: require.resolve('path-browserify'),
    },
    fallback: {
      fs: false, // Ensure 'fs' is used only in the preload/main process
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Update this to handle both .js and .jsx
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Image file extensions
        type: 'asset/resource', // Use built-in Webpack 5 loader
      },
    ],
  },
  externals: {
    electron: 'commonjs electron',
    fs: 'commonjs fs',
    path: 'commonjs path',
  },
  plugins: [
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/data"),
          to: "data"
        }
      ]
    })
  ],
  devServer: {
    static: './dist',
    port: 5000,
    historyApiFallback: true, // for react router
    hot: false,
  },
};
