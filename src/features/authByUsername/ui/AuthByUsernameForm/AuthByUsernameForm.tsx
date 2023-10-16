import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FieldChangeHandler } from 'shared/types';

import { Form, FormProps, Input } from 'shared/ui';

import { AuthByUsernameFormData, AuthByUsernameFormFieldNames } from 'features/authByUsername';

interface AuthByUsernameFormProps extends
  FieldChangeHandler,
  Omit<FormProps, 'onChange'> {
  data: AuthByUsernameFormData;
}

const AuthByUsernameForm: FC<AuthByUsernameFormProps> = (props) => {
  const {
    className, data, onChange, ...formProps
  } = props;
  const { t } = useTranslation(['auth']);

  return (
    <Form {...formProps}>
      {Object.values(data).map(({
        name,
        value,
      }) => (
        <Input
          key={name}
          type="text"
          name={name}
          value={value}
          placeholder={t(`loginForm.fields.${name}.placeholder`)}
          label={t(`loginForm.fields.${name}.label`)}
          onChange={onChange}
          autofocus={name === AuthByUsernameFormFieldNames.USERNAME}
        />
      ))}
    </Form>
  );
};

export default AuthByUsernameForm;
