import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';

interface StateSchema {
  counter: CounterSchema;
  user: UserSchema
}

export default StateSchema;
