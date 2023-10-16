import { StateSchema } from 'shared/types';

const getAuthByUsernameError = (state: StateSchema) => state.authByUsername.error;

export default getAuthByUsernameError;
