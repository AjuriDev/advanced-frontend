import type { Meta, StoryObj } from '@storybook/react';
import LangSwitcher from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
