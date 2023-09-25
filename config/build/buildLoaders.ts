import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

import { isDevMode } from "./utils";

export default function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { mode } = options;
    const isDev = isDevMode(mode);

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
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (filename: string) => Boolean(filename.includes('.module.')),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        cssLoader,
    ]
}