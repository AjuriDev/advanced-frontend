import { Mods } from '../joinClassNames/types';

interface ClassNames {
  [className: string]: string;
}
function createClassNameMods(
  arrMods: (string | boolean | undefined | null)[],
  cls: ClassNames,
): Mods {
  return arrMods.reduce((result, mod) => (
    typeof mod !== 'string'
      ? result
      : ({ ...result, [cls[mod]]: mod })
  ), {});
}

export default createClassNameMods;
