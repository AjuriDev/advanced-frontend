import { StateSchema, StoreProvider, asyncReducers } from 'app/providers/store';
import { Decorator } from '@storybook/react';

type StoreDecoratorType = (state: StateSchema) => Decorator;
const StoreDecorator: StoreDecoratorType = (state) => (Story) => (
  <StoreProvider initialState={state} asyncReducers={asyncReducers}>
    <Story />
  </StoreProvider>
);

export default StoreDecorator;
