import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authByUsername,
  authByUsernameActions,
  AuthByUsernameForm,
  getAuthByUsernameData,
  getAuthByUsernameError,
  isAuthByUsernameLoading,
} from 'features/authByUsername';

import { useReducerManager } from 'shared/lib/hooks';
import { ButtonVariants } from 'shared/ui/Button/lib/constants';
import { UIViewTypes } from 'shared/lib/constants/ui';
import { Button, Text } from 'shared/ui';

import { AsyncStateSchemaKey } from 'app/providers/store';
import cls from './AuthByUsernameModalBody.module.scss';

const AUTH_BY_USERNAME_FORM_ID = 'authByUsernameForm';

const asyncReducers: AsyncStateSchemaKey[] = ['authByUsername'];

const AuthByUsernameModalBody: FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector(isAuthByUsernameLoading);
  const error = useSelector(getAuthByUsernameError);
  const formData = useSelector(getAuthByUsernameData);
  useReducerManager(asyncReducers);

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
  );
};

export default AuthByUsernameModalBody;
