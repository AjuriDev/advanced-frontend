import { FC, SVGAttributes } from 'react';
import { UIColors, UISizes } from '../lib/constants';

interface ClassName {
  className?: string;
}

interface Color {
  color?: UIColors;
}

interface Variant<T> {
  variant?: T;
}

interface Size {
  size?: UISizes;
}

interface IconComponent {
  Icon?: FC<SVGAttributes<SVGElement>>;
}

export {
  ClassName,
  Color,
  Variant,
  Size,
  IconComponent,
};
