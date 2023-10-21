import { StateSchema } from 'app/providers/store';

const getUserAuthData = (state: StateSchema) => state.user.authData;

export default getUserAuthData;
