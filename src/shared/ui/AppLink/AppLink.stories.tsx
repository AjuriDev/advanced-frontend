import type { Meta, StoryObj } from '@storybook/react';

import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'AppLink',
  },
};

type Story = StoryObj<typeof meta>;

const Dark: Story = {};

export { Dark };
export default meta;
