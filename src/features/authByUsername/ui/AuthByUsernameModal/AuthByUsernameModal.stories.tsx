import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook';
import { StateSchema } from 'shared/types';
import { authByUsernameInitialState }
  from 'features/authByUsername/model/slice/authByUsername.slice';
import AuthByUsernameModal from './AuthByUsernameModal';

const meta: Meta<typeof AuthByUsernameModal> = {
  title: 'features/AuthByUsernameModal',
  component: AuthByUsernameModal,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {
  decorators: [StoreDecorator({
    authByUsername: { ...authByUsernameInitialState, modalOpened: true },
  } as StateSchema)],
};

export { Default };
export default meta;
