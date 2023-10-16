import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import { userReducer } from 'entities/user';
import { authByUsernameReducer } from 'features/authByUsername';

const rootReducer: ReducersMapObject<StateSchema> = {
  user: userReducer,
  authByUsername: authByUsernameReducer,
};

function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
