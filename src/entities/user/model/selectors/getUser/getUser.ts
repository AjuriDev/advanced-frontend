import { StateSchema } from 'app/providers/store';

const getUser = (state: StateSchema) => state.user;

export default getUser;
