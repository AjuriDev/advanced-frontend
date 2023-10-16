import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
