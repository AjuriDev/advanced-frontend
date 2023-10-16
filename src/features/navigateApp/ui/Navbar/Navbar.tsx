import { FC } from 'react';

import { ClassName } from 'shared/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { AppRoutes, RoutePath } from 'shared/lib/constants';

import { AppLink } from 'shared/ui';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import cls from './Navbar.module.scss';

interface NavbarProps extends ClassName {
  onlyIcon?: boolean;
}

const routeConfig = {
  [AppRoutes.MAIN]: {
    route: AppRoutes.MAIN,
    path: RoutePath[AppRoutes.MAIN],
    Icon: HomeIcon,
  },
  [AppRoutes.ABOUT]: {
    route: AppRoutes.ABOUT,
    path: RoutePath[AppRoutes.ABOUT],
    Icon: AboutIcon,
  },
};

const Navbar: FC<NavbarProps> = (props) => {
  const { className, onlyIcon = false } = props;

  return (
    <div className={cn(cls.root, { [cls.onlyIcon]: onlyIcon }, [className])}>
      {Object.values(routeConfig).map(({ route, path, Icon }) => (
        <AppLink
          key={route}
          className={cls.link}
          text={{ tKey: `pageNames.${route}` }}
          to={path}
          Icon={Icon}
        />
      ))}
    </div>
  );
};

export default Navbar;
