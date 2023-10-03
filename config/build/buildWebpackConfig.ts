import { Configuration } from 'webpack';
import { BuildOptions } from './types';
import buildLoaders from './loaders/buildLoaders';
import buildResolvers from './buildResolvers';
import buildPlugins from './buildPlugins';
import buildDevServer from './buildDevServer';

import { isDevMode } from './lib/utils';

function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options;
  const isDev = isDevMode(mode);

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

export default buildWebpackConfig;
