import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema, AsyncReducersMap } from 'app/providers/store';
import createReduxStore from '../config/store';

interface StoreProviderProps {
  initialState?: StateSchema;
  asyncReducers?: AsyncReducersMap;
}
const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {
    initialState,
    asyncReducers,
    children,
  } = props;
  const store = createReduxStore(initialState, asyncReducers);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
