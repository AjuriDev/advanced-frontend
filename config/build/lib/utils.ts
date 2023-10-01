import { BuildModes } from './constants';

function isDevMode(mode: BuildModes): boolean {
  return mode === BuildModes.DEV;
}

export { isDevMode };
