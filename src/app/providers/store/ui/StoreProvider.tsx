import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from 'shared/types';
import createReduxStore from '../config/store';

interface StoreProviderProps {
  initialState?: StateSchema,
}
const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { initialState, children } = props;
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
