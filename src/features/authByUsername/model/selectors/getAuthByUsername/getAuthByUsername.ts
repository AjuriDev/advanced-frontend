import { StateSchema } from 'app/providers/store';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

const getAuthByUsername = (state: StateSchema) => state.authByUsername
  || authByUsernameInitialState;

export default getAuthByUsername;
