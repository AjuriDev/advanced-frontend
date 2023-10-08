import { ButtonHTMLAttributes, FC } from 'react';

import {
  ClassName,
  View,
  Variant,
  Size,
  IconComponent,
} from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UIViewTypes, UISizes } from 'shared/ui/lib/constants';
import { ButtonTestIds } from './lib/tests';
import { ButtonVariants } from './lib/constants';

import cls from './Button.module.scss';

interface ButtonProps extends
  ClassName,
  View,
  Variant<ButtonVariants>,
  Size,
  IconComponent,
  ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    type,
    view = UIViewTypes.PRIMARY,
    variant = ButtonVariants.TEXT,
    size = UISizes.MD,
    Icon,
    children,
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
      type="button"
      {...buttonProps}
    >
      {children && <span>{children}</span>}
      {Icon && <Icon className={cls.icon} />}
    </button>
  );
};

export default Button;
