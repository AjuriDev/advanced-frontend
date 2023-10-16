import { StateSchema } from 'shared/types';

const getAuthByUsernameData = (state: StateSchema) => state.authByUsername.data;

export default getAuthByUsernameData;
