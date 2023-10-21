import { useDispatch, useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  AsyncStateSchemaKey,
  ReducersMap,
} from 'app/providers/store';
import { useEffect } from 'react';

const useReducerManager = (
  reducerKeys: AsyncStateSchemaKey[],
  removeAfterUnmount: boolean = true,
) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    for (const key of reducerKeys) {
      store.reducerManager.add(key);
      dispatch({ type: `@INIT ${key} reducer` });
    }
    return () => {
      if (removeAfterUnmount) {
        for (const key of reducerKeys) {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        }
      }
    };
  }, [store, dispatch, reducerKeys, removeAfterUnmount]);
};

export { ReducersMap };

export default useReducerManager;
