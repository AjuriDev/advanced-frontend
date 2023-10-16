import { FC, useCallback } from 'react';

import { Button, Modal, Text } from 'shared/ui';
import {
  authByUsername,
  authByUsernameActions,
  AuthByUsernameForm,
  getAuthByUsernameData,
  getAuthByUsernameError,
  isAuthByUsernameLoading,
  isAuthByUsernameModalOpened,
} from 'features/authByUsername';
import { ButtonVariants } from 'shared/ui/Button/lib/constants';
import { useDispatch, useSelector } from 'react-redux';

import { UIViewTypes } from 'shared/lib/constants/ui';
import cls from './AuthByUsernameModal.module.scss';

const AUTH_BY_USERNAME_FORM_ID = 'authByUsernameForm';

const AuthByUsernameModal: FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector(isAuthByUsernameLoading);
  const error = useSelector(getAuthByUsernameError);
  const modalOpened = useSelector(isAuthByUsernameModalOpened);
  const formData = useSelector(getAuthByUsernameData);

  const handleModalClose = useCallback(() => {
    dispatch(authByUsernameActions.toggleModal(false));
  }, [dispatch]);

  const handleDataChange = useCallback((params) => {
    dispatch(authByUsernameActions.changeData(params));
  }, [dispatch]);

  const handleFormSubmit = useCallback(() => {
    dispatch(authByUsername({
      username: formData.username.value,
      password: formData.password.value,
    }));
  }, [dispatch, formData]);

  return (
    <Modal
      opened={modalOpened}
      title={{ tKey: 'authorization', ns: 'auth' }}
      onClose={handleModalClose}
    >
      <div className={cls.root}>
        {error && <Text text={error.message} view={UIViewTypes.ERROR} />}
        <AuthByUsernameForm
          id={AUTH_BY_USERNAME_FORM_ID}
          data={formData}
          onChange={handleDataChange}
          onSubmit={handleFormSubmit}
        />
        <Button
          type="submit"
          className={cls.loginButton}
          variant={ButtonVariants.FILLED}
          form={AUTH_BY_USERNAME_FORM_ID}
          text={{ tKey: 'actions.login' }}
          disabled={loading}
          loading={loading}
        />
      </div>
    </Modal>
  );
};

export default AuthByUsernameModal;
