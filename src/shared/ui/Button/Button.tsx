import { ButtonHTMLAttributes, FC, SVGAttributes } from 'react';

import { ClassName, Color, Variant } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UIColors } from 'shared/ui/lib/constants';
import { ButtonTestIds } from './lib/tests';
import { ButtonVariants } from './lib/constants';

import cls from './Button.module.scss';

interface ButtonProps extends
  ClassName,
  Color,
  Variant<ButtonVariants>,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  Icon?: FC<SVGAttributes<SVGElement>>
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    type,
    color = UIColors.PRIMARY,
    variant = ButtonVariants.TEXT,
    Icon,
    children,
    ...buttonProps
  } = props;

  return (
    <button
      data-testid={ButtonTestIds.ROOT}
      className={cn(
        cls.Button,
        undefined,
        [className, cls[color], cls[variant]],
      )}
      type="button"
      {...buttonProps}
    >
      {children}
      {Icon && <Icon className={cls.icon} />}
    </button>
  );
};

export default Button;
