const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 9000,
    clientLogLevel: 'warning'
    
  }


};
