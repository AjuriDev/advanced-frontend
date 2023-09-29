import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port,
    historyApiFallback: true,
    hot: true,
  };
}

export default buildDevServer;
