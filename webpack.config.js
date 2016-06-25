module.exports = {
  entry: {
    main: './src/main',
    renderer: './src/app'
  },
  target: 'electron',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css!stylus'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/app',
    publicPath: '/',
    filename: 'bundle.[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
