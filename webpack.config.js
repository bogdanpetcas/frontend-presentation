module.exports = {
  entry: "./app/src/index.js", //path relative to this file
  output: {
    path: __dirname + '/app/dist',
    filename: "bundle.js" //path relative to this file
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      }
    ]
  }
}
