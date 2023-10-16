import { UserSchema } from 'entities/user';
import { AuthByUsernameSchema } from 'features/authByUsername';

interface StateSchema {
  user: UserSchema;
  authByUsername: AuthByUsernameSchema;
}

export default StateSchema;
