import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ClassName } from 'shared/types';

import { UIViewTypes } from 'shared/lib/constants/ui';
import { Button } from 'shared/ui';
import { userActions } from 'entities/user';

interface LogoutButtonProps extends ClassName {}

const LogoutButton: FC<LogoutButtonProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(userActions.resetAuthData());
  }, [dispatch]);

  return (
    <Button
      className={className}
      view={UIViewTypes.INHERIT}
      text={{ tKey: 'actions.logout' }}
      onClick={handleLogout}
    />
  );
};

export default LogoutButton;
