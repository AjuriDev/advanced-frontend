import { configureStore } from '@reduxjs/toolkit';

import StateSchema, { AsyncReducersMap, staticReducers } from './state.schema';
import createReducerManager from './reducerManager';

function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: AsyncReducersMap,
) {
  // @ts-ignore
  const reducerManager = createReducerManager({
    ...asyncReducers,
    ...staticReducers,
  });
  const store = configureStore<StateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export default createReduxStore;
