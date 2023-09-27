import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port,
    historyApiFallback: true,
    hot: true,
  };
}
