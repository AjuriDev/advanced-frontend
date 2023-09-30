import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

import { isDevMode } from './utils';

function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { mode } = options;
  const isDev = isDevMode(mode);

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

  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (filename: string) => Boolean(filename.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  };

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
