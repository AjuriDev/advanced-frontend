import { FC, SVGAttributes } from 'react';
import { UIViewTypes, UISizes } from '../lib/constants/ui';

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

interface Translation {
  tKey: string;
  ns?: string;
}

type TextType = string | number | Translation;

type TextElTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';

interface Loading {
  loading?: boolean;
}

interface IconComponent {
  Icon?: FC<SVGAttributes<SVGElement>>;
}

export {
  ClassName,
  View,
  Variant,
  Size,
  Translation,
  TextType,
  TextElTags,
  Loading,
  IconComponent,
};
