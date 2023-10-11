import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/types';
import { UIViewTypes } from 'shared/lib/constants/ui';
import { Button, Modal } from 'shared/ui';

import { LoginForm } from 'entities/user';

interface LoginButtonProps extends ClassName {}

const LoginButton: FC<LoginButtonProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const handleModalOpen = useCallback(() => {
    setModalOpened(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpened(false);
  }, []);

  return (
    <>
      <Button
        className={className}
        view={UIViewTypes.INHERIT}
        onClick={handleModalOpen}
      >
        {t('actions.login')}
      </Button>
      <Modal opened={modalOpened} onClose={handleModalClose}>
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginButton;
