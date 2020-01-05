const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

const srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      components: `${srcPath}/components`,
      store: `${srcPath}/store`,
      utils: `${srcPath}/utils`
    }
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      { 
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  }
}