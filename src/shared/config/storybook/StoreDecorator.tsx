import { StateSchema } from 'shared/types';
import { Decorator } from '@storybook/react';

import StoreProvider from 'app/providers/store/ui/StoreProvider';

type StoreDecoratorType = (state: StateSchema) => Decorator;
const StoreDecorator: StoreDecoratorType = (state) => (Story) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);

export default StoreDecorator;
