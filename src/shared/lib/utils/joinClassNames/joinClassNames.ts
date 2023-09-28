import { Dividers } from '../../constants';

type Mods = Record<string, boolean | string>;

export default function joinClassNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...Object.entries(mods)
      .reduce(
        (additionalClasses, [className, value]) => (value
          ? [...additionalClasses, className]
          : additionalClasses),
        [],
      ),
    ...additional.filter((className) => Boolean(className)),
  ].join(Dividers.CLASS_NAME);
}
