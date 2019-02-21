const { ReactLoadablePlugin } = require('react-loadable/webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { loadableAssetsFile, clientAssetsFile } = require('kyt-utils/paths')();

exports.kytWebpackPlugins = function kytWebpackPlugins(options) {
  const plugins = [];

  if (options.type === 'client') {
    plugins.push(
      new ReactLoadablePlugin({
        filename: loadableAssetsFile,
      })
    );

    plugins.push(
      new ManifestPlugin({
        publicPath: options.publicPath,
        fileName: clientAssetsFile,
        writeToFileEmit: true,
      })
    );
  }

  return plugins;
};
