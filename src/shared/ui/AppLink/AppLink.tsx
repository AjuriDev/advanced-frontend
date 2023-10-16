import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import {
  ClassName, View, IconComponent, TextType,
} from '../../types';
import { joinClassNames as cn } from '../../lib/utils';
import { UIViewTypes } from '../../lib/constants/ui';

import Text from '../Text/Text';

import cls from './AppLink.module.scss';

interface AppLinkProps extends
  ClassName,
  LinkProps,
  View,
  IconComponent {
  text?: TextType;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    view = UIViewTypes.PRIMARY,
    text,
    Icon,
    ...linkProps
  } = props;

  return (
    <Link
      className={cn(cls.root, undefined, [className, cls[view]])}
      {...linkProps}
    >
      {Icon && <Icon className={cls.icon} />}
      {text && <Text text={text} />}
    </Link>
  );
};

export default AppLink;
