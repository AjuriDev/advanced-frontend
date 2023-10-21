import { StateSchema } from 'app/providers/store';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

const getAuthByUsernameError = (state: StateSchema) => (
  state.authByUsername
    || authByUsernameInitialState
).error;

export default getAuthByUsernameError;
