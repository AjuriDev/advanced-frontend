import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName, FieldChangeHandler, FormSubmitHandler } from 'shared/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import { Button, Form, Input } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/lib/constants';
import cls from './LoginForm.module.scss';

import { LoginFormFieldNames } from './lib/constants';

interface LoginFormProps extends
  ClassName,
  FieldChangeHandler,
  FormSubmitHandler
{}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, onChange, onSubmit } = props;
  const { t } = useTranslation(['auth']);

  return (
    <Form
      className={cn(
        cls.root,
        undefined,
        [className],
      )}
      onSubmit={onSubmit}
    >
      <h2 className={cls.title}>{t('authorization')}</h2>
      <Input
        type="text"
        name={LoginFormFieldNames.USERNAME}
        placeholder={t(`loginForm.fields.${LoginFormFieldNames.USERNAME}.placeholder`)}
        label={t(`loginForm.fields.${LoginFormFieldNames.USERNAME}.label`)}
        onChange={onChange}
        autofocus
      />
      <Input
        type="text"
        name={LoginFormFieldNames.PASSWORD}
        placeholder={t(`loginForm.fields.${LoginFormFieldNames.PASSWORD}.placeholder`)}
        label={t(`loginForm.fields.${LoginFormFieldNames.PASSWORD}.label`)}
        onChange={onChange}
      />
      <Button
        type="submit"
        className={cls.loginButton}
        variant={ButtonVariants.FILLED}
      >
        {t('actions.login', { ns: 'common' })}
      </Button>
    </Form>
  );
};

export default LoginForm;
