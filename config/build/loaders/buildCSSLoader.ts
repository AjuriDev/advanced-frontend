import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types';
import { isDevMode } from '../lib/utils';

function buildCSSLoader(options: BuildOptions): RuleSetRule {
  const { mode } = options;
  const isDev = isDevMode(mode);

  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (filename: string) => Boolean(filename.includes('.module.')),
            localIdentName: isDev
              ? '[local]([hash:base64:4])'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}

export default buildCSSLoader;
