import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/main',
  component: MainPage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
