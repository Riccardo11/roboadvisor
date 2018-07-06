const path = require('path');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs',
    host: '0.0.0.0'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // necessary to load bootstrap stylesheet
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  mode: 'development'
};
