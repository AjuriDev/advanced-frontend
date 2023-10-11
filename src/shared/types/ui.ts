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

interface IconComponent {
  Icon?: FC<SVGAttributes<SVGElement>>;
}

interface FieldChangeHandlerParams {
  name: string;
  value: string;
}

interface FieldChangeHandler {
  onChange?: (params: FieldChangeHandlerParams) => void;
}

interface FieldProps extends
  Partial<FieldChangeHandlerParams>,
  FieldChangeHandler {
  label?: string,
  hint?: string,
  autofocus?: boolean
}

interface FormSubmitHandler {
  onSubmit?: () => void;
}

export {
  ClassName,
  View,
  Variant,
  Size,
  IconComponent,
  FieldChangeHandlerParams,
  FieldChangeHandler,
  FormSubmitHandler,
  FieldProps,
};
