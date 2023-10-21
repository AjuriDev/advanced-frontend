import {
  AnyAction,
  combineReducers,
} from '@reduxjs/toolkit';
import StateSchema, {
  AsyncStateSchemaKey,
  ReducerManager,
  asyncReducers,
  ReducersMap,
} from './state.schema';

function createReducerManager(initialReducers: ReducersMap): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove:AsyncStateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: AsyncStateSchemaKey) => {
      if (!key || reducers[key]) {
        return;
      }

      // @ts-ignore TODO разобраться с типизацией
      reducers[key] = asyncReducers[key];
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: AsyncStateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}

export { ReducerManager };

export default createReducerManager;
