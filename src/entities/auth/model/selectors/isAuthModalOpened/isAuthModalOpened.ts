import { StateSchema } from 'app/providers/store';
import {
  authInitialState,
} from '../../slice/auth.slice';

const isAuthModalOpened = (state: StateSchema) => (state.auth || authInitialState).modalOpened;

export default isAuthModalOpened;
