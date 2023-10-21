import { StateSchema } from 'app/providers/store';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

const isAuthByUsernameLoading = (state: StateSchema) => (
  state.authByUsername
    || authByUsernameInitialState
).loading;

export default isAuthByUsernameLoading;
