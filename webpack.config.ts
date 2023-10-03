import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types';
import { BuildModes } from './config/build/lib/constants';
import { buildWebpackConfig } from './config/build';

const DEFAULT_PORT = 3000;

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv): Configuration => {
  const { port, mode } = env;
  return buildWebpackConfig({
    mode: mode || BuildModes.DEV,
    paths,
    port: port || DEFAULT_PORT,
  });
};
