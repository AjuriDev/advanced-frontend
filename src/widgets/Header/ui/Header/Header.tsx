import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/lib/constants';
import { UIViewTypes } from 'shared/ui/lib/constants';

import { AppLink } from 'shared/ui';
import HomeIcon from 'shared/assets/icons/home.svg';

import cls from './Header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={cls.root}>
      <AppLink
        to={RoutePath[AppRoutes.MAIN]}
        view={UIViewTypes.SECONDARY}
        Icon={HomeIcon}
      >
        {t('pageNames.main')}
      </AppLink>
    </header>
  );
};
export default Header;
