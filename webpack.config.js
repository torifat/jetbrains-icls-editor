module.exports = {
  entry: "./src/app.js",
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional=es7.classProperties'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./",
    info: false, //  --no-info option
    hot: false,
    inline: true,
    colors: true,
    port: 9000
  }
};
