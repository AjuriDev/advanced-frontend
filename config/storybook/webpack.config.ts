import { Configuration, DefinePlugin } from 'webpack';
import path from 'path';
import { BuildOptions, BuildPaths } from '../build/types';
import buildCSSLoader from '../build/loaders/buildCSSLoader';
import { BuildModes } from '../build/lib/constants';
import buildSVGLoader from '../build/loaders/buildSVGLoader';

const paths: BuildPaths = {
  build: '',
  html: '',
  entry: '',
  src: path.resolve(__dirname, '../../src'),
};

const DEFAULT_PORT = 6006;

export default ({ config }: { config: Configuration }) => {
  const options: BuildOptions = {
    mode: BuildModes.DEV,
    paths,
    port: DEFAULT_PORT,
  };

  if (!config.resolve) config.resolve = {};

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    paths.src,
  ];

  config.resolve.extensions = [
    ...(config.resolve.extensions || []),
    '.ts',
    '.tsx',
  ];

  if (!config.module) config.module = {};

  config.module.rules = [
    ...(
      config.module.rules
        ?.map((rule) => typeof rule === 'object' && (/svg/.test(rule?.test as string)
          ? { ...rule, exclude: /\.svg$/i }
          : rule))
      || []
    ),
    buildCSSLoader(options),
    buildSVGLoader(),
  ];

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
  }));

  return config;
};
