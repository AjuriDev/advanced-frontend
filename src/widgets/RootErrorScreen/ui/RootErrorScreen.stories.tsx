import type { Meta, StoryObj } from '@storybook/react';

import RootErrorScreen from './RootErrorScreen';

const meta: Meta<typeof RootErrorScreen> = {
  title: 'widgets/RootErrorScreen',
  component: RootErrorScreen,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Dark: Story = {};

export { Dark };
export default meta;
