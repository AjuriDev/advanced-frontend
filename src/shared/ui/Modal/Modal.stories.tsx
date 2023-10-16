import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    opened: true,
    children: 'Some text',
  },
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithTitle: Story = {
  args: {
    title: 'Title',
  },
};

export { Default, WithTitle };
export default meta;
