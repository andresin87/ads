const path = require('path');

module.exports = function({ config }) {
  config.module.rules.unshift(
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /\.s[ac]ss$/,
      include: [path.resolve(__dirname, './src/')],
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  );

  return config;
};