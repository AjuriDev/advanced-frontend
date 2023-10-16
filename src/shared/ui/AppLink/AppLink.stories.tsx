import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    text: 'AppLink',
  },
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
