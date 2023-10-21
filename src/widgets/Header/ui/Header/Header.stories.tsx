import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook';
import {
  authByUsernameInitialState,
} from 'features/authByUsername/model/slice/authByUsername.slice';
import { StateSchema } from 'app/providers/store';
import { authInitialState } from 'entities/auth/model/slice/auth.slice';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {
  decorators: [StoreDecorator({
    authByUsername: authByUsernameInitialState,
    auth: authInitialState,
  } as StateSchema)],
};

export { Default };
export default meta;
