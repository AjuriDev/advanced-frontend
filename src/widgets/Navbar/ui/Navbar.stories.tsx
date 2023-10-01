import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Dark: Story = {};

export { Dark };
export default meta;
