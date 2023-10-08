import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppRouter } from 'app/providers/Router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { Button, Modal } from 'shared/ui';

import './styles/_index.scss';

const App: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const { t } = useTranslation('common');

  const handleClose = useCallback(() => setOpened(false), []);

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Button onClick={() => setOpened(true)}>{t('actions.open')}</Button>
        <Sidebar />
        <AppRouter />
        <Modal opened={opened} onClose={handleClose} />
      </div>
    </div>
  );
};
export default App;
