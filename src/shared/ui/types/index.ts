import { FC, SVGAttributes } from 'react';
import { UIViewTypes, UISizes } from '../lib/constants';

interface ClassName {
  className?: string;
}

interface View {
  view?: UIViewTypes;
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
  View,
  Variant,
  Size,
  IconComponent,
};
