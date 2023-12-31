import { BuildModes } from './lib/constants';

type Port = number;

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
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

export { BuildPaths, BuildEnv, BuildOptions };
