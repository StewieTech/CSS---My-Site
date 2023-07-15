const path = require('path');

module.exports = {
  entry: './client/src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for JavaScript files
          options: {
            presets: ['@babel/preset-react'], // Apply the React preset
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Loaders for handling CSS files
      },
    ],
  },
  
};
