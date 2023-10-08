import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    opened: true,
    children: 'Lorem',
  },
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export { Default };
export default meta;
