module.exports = {
  presets: [
    [
      'babel-preset-kyt-react',
      {
        includeRuntime: true,
      },
    ],
  ],
  plugins: ['kyt-runtime/babel'],
};
