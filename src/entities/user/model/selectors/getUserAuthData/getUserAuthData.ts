import { StateSchema } from 'shared/types';

const getUserAuthData = (state: StateSchema) => state.user.authData;

export default getUserAuthData;
