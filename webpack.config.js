var argv = require('yargs').argv;

module.exports = {
  context: __dirname,
  devtool: argv.p ? null : "inline-sourcemap",
  entry: './src/js/client.js',
  output: {
    path: __dirname + '/src/',
    filename: 'client.min.js'
  },
  module: {
    // preLoaders: [
    //     {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         loader: 'jshint'
    //     }
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css' 
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /images/,
        loader: 'url'
      }
    ],
  }
  // jshint: {
  //   esversion: 6
  // }
};