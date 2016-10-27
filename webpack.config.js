module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: require('path').join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components'
    ],
    alias: {
      src: 'src'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true
  },
  devtool: 'cheap-module-eval-source-map'
};
