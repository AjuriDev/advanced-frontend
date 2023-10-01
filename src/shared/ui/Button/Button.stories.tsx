import type { Meta, StoryObj } from '@storybook/react';

import { ButtonVariants } from './lib/constants';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
  args: {
    children: 'Button',
  },
};

type Story = StoryObj<typeof meta>;

const Text: Story = {
  args: {
    variant: ButtonVariants.TEXT,
  },
};

const Filled: Story = {
  args: {
    variant: ButtonVariants.FILLED,
  },
};

const Outlined: Story = {
  args: {
    variant: ButtonVariants.OUTLINED,
  },
};

export {
  Text,
  Filled,
  Outlined,
};

export default meta;
