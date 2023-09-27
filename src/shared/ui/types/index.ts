import { UIColors } from '../lib/constants';

interface ClassName {
  className?: string;
}

interface Color {
  color?: UIColors;
}

interface Variant<T> {
  variant?: T;
}

export { ClassName, Color, Variant };
