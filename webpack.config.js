const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'codemirror/lib/codemirror.js',
    path: path.resolve(__dirname, 'dist')
  },
     module: {
         rules: [
           {
             test: /\.css$/,
             use: [
              'style-loader',
              'css-loader'
             ]
           },
           {
            test: /\.js$/,
            use: {
              loader: 'babel-loader'
            },
            exclude: '/node_modules/'
          },
          {test:/\.ts$/,exclude: /node_modules/,use:['ts-loader']}
         ]
   }
};