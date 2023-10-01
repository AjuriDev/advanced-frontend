import type { Meta, StoryObj } from '@storybook/react';

import TextLoader from './TextLoader';

const meta: Meta<typeof TextLoader> = {
  title: 'shared/TextLoader',
  component: TextLoader,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
