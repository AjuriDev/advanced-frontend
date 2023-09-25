import { BuildOptions } from "./types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options

    return {
        port,
        open: true,
        historyApiFallback: true
    }
}