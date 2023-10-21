import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook';
import { StateSchema } from 'app/providers/store';
import { authByUsernameInitialState }
  from 'features/authByUsername/model/slice/authByUsername.slice';
import AuthByUsernameModalBody from './AuthByUsernameModalBody';

const meta: Meta<typeof AuthByUsernameModalBody> = {
  title: 'features/AuthByUsernameModalBody',
  component: AuthByUsernameModalBody,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {
  decorators: [StoreDecorator({
    authByUsername: authByUsernameInitialState,
  } as StateSchema)],
};

export { Default };
export default meta;
