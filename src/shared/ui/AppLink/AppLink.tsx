import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ClassName, View, IconComponent } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UIViewTypes } from 'shared/ui/lib/constants';

import cls from './AppLink.module.scss';

interface AppLinkProps extends
  ClassName,
  LinkProps,
  View,
  IconComponent {}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className, view = UIViewTypes.PRIMARY, Icon, children, ...linkProps
  } = props;

  return (
    <Link
      className={cn(cls.root, undefined, [className, cls[view]])}
      {...linkProps}
    >
      {Icon && <Icon className={cls.icon} />}
      {children}
    </Link>
  );
};

export default AppLink;
