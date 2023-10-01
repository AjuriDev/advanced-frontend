import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types';
import buildCSSLoader from './buildCSSLoader';
import buildSVGLoader from './buildSVGLoader';

function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const babelLoader: RuleSetRule = {
    test: /\.(?:js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env'],
        ],
      },
    },
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCSSLoader(options);

  const svgLoader = buildSVGLoader();

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: ['file-loader'],
  };

  return [
    cssLoader,
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
  ];
}

export default buildLoaders;
