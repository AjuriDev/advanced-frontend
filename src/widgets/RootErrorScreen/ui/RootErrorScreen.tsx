import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';

import cls from './RootErrorScreen.module.scss';

const RootErrorScreen: FC = () => {
  const { t } = useTranslation();

  const handlePageReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cls.root}>
      <h1 className={cls.header}>{t('rootError.title')}</h1>
      <Button onClick={handlePageReload}>{t('rootError.reloadPage')}</Button>
    </div>
  );
};

export default RootErrorScreen;
