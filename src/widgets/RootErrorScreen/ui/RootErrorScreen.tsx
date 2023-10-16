import { FC } from 'react';

import { Button, Text } from 'shared/ui';

import cls from './RootErrorScreen.module.scss';

const RootErrorScreen: FC = () => {
  const handlePageReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cls.root}>
      <Text className={cls.header} text={{ tKey: 'rootError.title' }} Tag="h1" />
      <Button text={{ tKey: 'rootError.reloadPage' }} onClick={handlePageReload} />
    </div>
  );
};

export default RootErrorScreen;
