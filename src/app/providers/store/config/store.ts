import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { StateSchema } from 'shared/types';

const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
};

function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
