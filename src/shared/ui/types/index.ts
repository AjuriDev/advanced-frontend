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

export {
  ClassName, Color, Variant, Size,
};
