import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ClassName } from 'shared/types';
import { UIViewTypes } from 'shared/lib/constants/ui';
import { Button } from 'shared/ui';

import {
  authByUsernameActions,
  AuthByUsernameModal,
} from 'features/authByUsername';

interface LoginButtonProps extends ClassName {}

const LoginButton: FC<LoginButtonProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  const handleModalOpen = useCallback(() => {
    dispatch(authByUsernameActions.toggleModal(true));
  }, [dispatch]);

  return (
    <>
      <Button
        className={className}
        view={UIViewTypes.INHERIT}
        text={{ tKey: 'actions.login' }}
        onClick={handleModalOpen}
      />

      <AuthByUsernameModal />
    </>
  );
};

export default LoginButton;
