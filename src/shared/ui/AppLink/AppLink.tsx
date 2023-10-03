import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ClassName, Color, IconComponent } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UIColors } from 'shared/ui/lib/constants';

import cls from './AppLink.module.scss';

interface AppLinkProps extends
  ClassName,
  Omit<LinkProps, 'color'>,
  Color,
  IconComponent {}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className, color = UIColors.PRIMARY, Icon, children, ...linkProps
  } = props;

  return (
    <Link
      className={cn(cls.AppLink, undefined, [className, cls[color]])}
      {...linkProps}
    >
      {Icon && <Icon className={cls.icon} />}
      {children}
    </Link>
  );
};

export default AppLink;
