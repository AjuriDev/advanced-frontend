import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { AppRoutes, RoutePath } from 'shared/lib/constants';
import { UIViewTypes } from 'shared/ui/lib/constants';

import { AppLink } from 'shared/ui';

import cls from './Navbar.module.scss';

interface NavbarProps extends ClassName {}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t: mainPageT } = useTranslation('mainPage');
  const { t: aboutPageT } = useTranslation('aboutPage');

  return (
    <div className={cn(cls.root, undefined, [className])}>
      <AppLink
        view={UIViewTypes.SECONDARY}
        to={RoutePath[AppRoutes.MAIN]}
      >
        {mainPageT('pageName')}
      </AppLink>
      <AppLink
        view={UIViewTypes.SECONDARY}
        to={RoutePath[AppRoutes.ABOUT]}
      >
        {aboutPageT('pageName')}
      </AppLink>
    </div>
  );
};

export default Navbar;
