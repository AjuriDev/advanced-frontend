import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema, userReducer } from 'entities/user';
import { AuthSchema, authReducer } from 'entities/auth';
import { AuthByUsernameSchema, authByUsernameReducer } from 'features/authByUsername';

interface StaticStateSchema {
  user: UserSchema;
  auth: AuthSchema;
}

interface AsyncStateSchema {
  authByUsername?: AuthByUsernameSchema;
}
interface StateSchema extends StaticStateSchema, AsyncStateSchema {}

type StaticStateSchemaKey = keyof StaticStateSchema;
type AsyncStateSchemaKey = keyof Required<AsyncStateSchema>;
type StateSchemaKey = keyof StateSchema;

interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

type ReducersMap = ReducersMapObject<StateSchema>;

type StaticReducersMap = ReducersMapObject<StaticStateSchema>;

type AsyncReducersMap = ReducersMapObject<Required<AsyncStateSchema>>;

const staticReducers: StaticReducersMap = {
  user: userReducer,
  auth: authReducer,
};

const asyncReducers: AsyncReducersMap = {
  authByUsername: authByUsernameReducer,
};
interface ReducerManager {
  getReducerMap: () => ReducersMap;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: AsyncStateSchemaKey) => void;
  remove: (key: AsyncStateSchemaKey) => void;
}

export {
  StaticStateSchema,
  StaticStateSchemaKey,
  AsyncStateSchema,
  AsyncStateSchemaKey,
  StateSchemaKey,
  ReducerManager,
  ReduxStoreWithManager,
  ReducersMap,
  StaticReducersMap,
  AsyncReducersMap,
  staticReducers,
  asyncReducers,
};

export default StateSchema;
