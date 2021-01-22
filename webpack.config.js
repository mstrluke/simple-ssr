const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(process.cwd(), './src/client.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(process.cwd(), './src'),
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};
