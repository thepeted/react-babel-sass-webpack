const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const webpack = require('webpack');


const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  styles: path.join(__dirname, 'src', 'styles')
};

const common = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
},
  plugins: [
    new HtmlWebPackPlugin({
      title: 'react-babel-sass-starter'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.styles
      },
       {
         test: /\.scss$|.sass$/,
         loaders: ['style', 'css', 'sass'],
         include: PATHS.styles
       }
    ]
  }
};

if (TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      //windows and ubuntu users may need alternative host and port settings
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
