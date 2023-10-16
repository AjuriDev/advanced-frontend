import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData } from 'entities/user';

import { AppRoutes, RoutePath } from 'shared/lib/constants';
import { UIViewTypes } from 'shared/lib/constants/ui';
import { AppLink } from 'shared/ui';

import HomeIcon from 'shared/assets/icons/home.svg';
import LogoutButton from 'widgets/Header/ui/LogoutButton/LogoutButton';
import LoginButton from '../LoginButton/LoginButton';

import cls from './Header.module.scss';

const Header: FC = () => {
  const authData = useSelector(getUserAuthData);

  return (
    <header className={cls.root}>
      <AppLink
        to={RoutePath[AppRoutes.MAIN]}
        view={UIViewTypes.SECONDARY}
        Icon={HomeIcon}
        text={{ tKey: 'pageNames.main' }}
      />
      {authData
        ? <LogoutButton className={cls.authControl} />
        : <LoginButton className={cls.authControl} />}
    </header>
  );
};
export default Header;
