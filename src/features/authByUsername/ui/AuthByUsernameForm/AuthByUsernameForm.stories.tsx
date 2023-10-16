import type { Meta, StoryObj } from '@storybook/react';
import { authByUsernameInitialData }
  from 'features/authByUsername/model/slice/authByUsername.slice';
import AuthByUsernameForm from './AuthByUsernameForm';

const meta: Meta<typeof AuthByUsernameForm> = {
  title: 'features/AuthByUsernameForm',
  component: AuthByUsernameForm,
  tags: ['autodocs'],
  args: {
    data: authByUsernameInitialData,
  },
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
