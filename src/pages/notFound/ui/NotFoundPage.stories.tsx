import type { Meta, StoryObj } from '@storybook/react';

import NotFoundPage from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/notFound',
  component: NotFoundPage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
