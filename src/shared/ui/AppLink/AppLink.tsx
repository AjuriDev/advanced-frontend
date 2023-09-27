import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ClassName, Color } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UIColors } from 'shared/ui/lib/constants';

import cls from './AppLink.module.scss';

interface AppLinkProps extends ClassName, Omit<LinkProps, 'color'>, Color {}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, color = UIColors.PRIMARY, ...linkProps } = props;

  return (
    <Link className={cn(cls.AppLink, undefined, [className, cls[color]])} {...linkProps} />
  );
};

export default AppLink;
