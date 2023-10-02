import {
  ProgressPlugin,
  DefinePlugin,
  WebpackPluginInstance,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types';
import { isDevMode } from './lib/utils';

function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { mode, paths } = options;

  const isDev = isDevMode(mode);

  const plugins = [
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}

export default buildPlugins;
