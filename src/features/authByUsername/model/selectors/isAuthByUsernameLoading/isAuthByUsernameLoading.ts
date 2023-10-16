import { StateSchema } from 'shared/types';

const isAuthByUsernameLoading = (state: StateSchema) => state.authByUsername.loading;

export default isAuthByUsernameLoading;
