import { StateSchema } from 'shared/types';

const isAuthByUsernameModalOpened = (state: StateSchema) => state.authByUsername.modalOpened;

export default isAuthByUsernameModalOpened;
