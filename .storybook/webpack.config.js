const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = function({ config }) {
  config.module.rules.unshift(
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /\.(stories|story)\.mdx$/,
      include: [path.resolve(__dirname, './src/')],
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    },
    {
      test: /\.s[ac]ss$/,
      include: [path.resolve(__dirname, './src/')],
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            javascriptEnabled: true,
          },
        },
      ],
    },
  );

  return config;
};
