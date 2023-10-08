import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/ui/types';
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
  const { t } = useTranslation();

  return (
    <div className={cn(cls.root, { [cls.onlyIcon]: onlyIcon }, [className])}>
      {Object.values(routeConfig).map(({ route, path, Icon }) => (
        <AppLink
          key={route}
          to={path}
          Icon={Icon}
        >
          <span className={cls.text}>{t(`pageNames.${route}`)}</span>
        </AppLink>
      ))}
    </div>
  );
};

export default Navbar;
