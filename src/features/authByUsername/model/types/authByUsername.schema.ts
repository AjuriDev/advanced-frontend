import { PayloadAction } from '@reduxjs/toolkit';
import { AuthByUsernameFormData, AuthByUsernameFormFieldNames } from 'features/authByUsername';
import { FieldData, ResponseError } from 'shared/types';

type ChangeDataActionPayload = PayloadAction<FieldData<AuthByUsernameFormFieldNames>>;

interface AuthByUsernameSchema {
  data: AuthByUsernameFormData;
  loading: boolean;
  error?: ResponseError;
}

export { ChangeDataActionPayload };
export default AuthByUsernameSchema;
