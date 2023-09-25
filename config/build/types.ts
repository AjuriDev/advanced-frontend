import {BuildModes} from "./constants";

type Port = number;

interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

interface BuildEnv {
    port: Port;
    mode: BuildModes;
}

interface BuildOptions {
    mode: BuildModes;
    paths: BuildPaths;
    port: Port;
}

export { BuildPaths, BuildEnv, BuildOptions }