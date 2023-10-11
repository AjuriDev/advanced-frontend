import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'entities/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: {},
};

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {},
};

export {
  Default,
};

export default meta;
