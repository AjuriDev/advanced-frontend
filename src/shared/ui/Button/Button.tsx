/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC } from 'react';

import {
  ClassName,
  View,
  Variant,
  Size,
  Loading,
  IconComponent,
  TextType,
} from '../../types';
import { joinClassNames as cn } from '../../lib/utils';
import { UIViewTypes, UISizes } from '../../lib/constants/ui';
import { ButtonTestIds } from './lib/tests';
import { ButtonVariants } from './lib/constants';

import Text from '../Text/Text';

import cls from './Button.module.scss';

interface ButtonProps extends
  ClassName,
  View,
  Variant<ButtonVariants>,
  Size,
  IconComponent,
  Loading,
  ButtonHTMLAttributes<HTMLButtonElement> {
  text?: TextType;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    type = 'button',
    view = UIViewTypes.PRIMARY,
    variant = ButtonVariants.TEXT,
    size = UISizes.MD,
    Icon,
    text,
    loading,
    ...buttonProps
  } = props;

  return (
    <button
      data-testid={ButtonTestIds.ROOT}
      className={cn(
        cls.root,
        undefined,
        [className, cls[view], cls[variant], cls[size]],
      )}
      type={type}
      {...buttonProps}
    >
      {text && <Text text={text} loading={loading} />}
      {Icon && <Icon className={cls.icon} />}
    </button>
  );
};

export default Button;
