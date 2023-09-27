import { Dividers } from '../constants';

type Mods = Record<string, boolean | string>;

export default function joinClassNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter((className) => Boolean(className)),
    ...Object.entries(mods)
      .reduce(
        (additionalClasses, [className, value]) => (value
          ? [...additionalClasses, className]
          : additionalClasses),
        [],
      ),
  ].join(Dividers.CLASS_NAME);
}
