import { Dividers } from '../../constants';
import { Mods } from './types';

export default function joinClassNames(
  cls: string,
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string {
  return [
    cls,
    ...Object.entries(mods)
      .reduce(
        (additionalClasses: string[], [className, value]) => (value
          ? [...additionalClasses, className]
          : additionalClasses),
        [],
      ),
    ...additional.filter((className) => Boolean(className)),
  ].join(Dividers.CLASS_NAME);
}
