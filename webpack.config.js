const path = require('path'),
   BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  watch: true,
	plugins: [
	    new BrowserSyncPlugin({
	      host: 'localhost',
	      port: 4100,
	      files: ['./*.html'],
	      server: { baseDir: ['.'] }
	    })
	],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};