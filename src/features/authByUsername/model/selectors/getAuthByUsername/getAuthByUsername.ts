import { StateSchema } from 'shared/types';

const getAuthByUsername = (state: StateSchema) => state.authByUsername;

export default getAuthByUsername;
