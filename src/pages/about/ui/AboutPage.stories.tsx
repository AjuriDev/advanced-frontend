import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/about',
  component: AboutPage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
