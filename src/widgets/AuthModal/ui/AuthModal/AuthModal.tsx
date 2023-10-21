import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthByUsernameModalBody } from 'features/authByUsername';
import { authActions, isAuthModalOpened } from 'entities/auth';
import { Modal } from 'shared/ui';

const AuthModal: FC = () => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector(isAuthModalOpened);

  const handleModalClose = useCallback(() => {
    dispatch(authActions.toggleModal(false));
  }, [dispatch]);

  return (
    <Modal
      opened={isModalOpened}
      title={{ tKey: 'authorization', ns: 'auth' }}
      onClose={handleModalClose}
    >
      <AuthByUsernameModalBody />
    </Modal>
  );
};

export default AuthModal;
