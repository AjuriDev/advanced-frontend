import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/lib/constants';
import { UIColors } from 'shared/ui/lib/constants';

import { AppLink } from 'shared/ui';
import HomeIcon from 'shared/assets/icons/home.svg';

import cls from './Header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={cls.Header}>
      <AppLink
        to={RoutePath[AppRoutes.MAIN]}
        color={UIColors.SECONDARY}
        Icon={HomeIcon}
      >
        {t('pageNames.main')}
      </AppLink>
    </header>
  );
};
export default Header;
