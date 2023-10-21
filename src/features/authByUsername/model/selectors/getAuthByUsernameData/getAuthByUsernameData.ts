import { StateSchema } from 'app/providers/store';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

const getAuthByUsernameData = (state: StateSchema) => (
  state.authByUsername
    || authByUsernameInitialState
).data;

export default getAuthByUsernameData;
