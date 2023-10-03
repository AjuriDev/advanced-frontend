import type { Meta, StoryObj } from '@storybook/react';

import { UIColors, UISizes } from 'shared/ui/lib/constants';
import { ButtonVariants } from './lib/constants';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
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

const FilledXS: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: UISizes.XS,
  },
};

const FilledSM: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: UISizes.SM,
  },
};

const FilledMD: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: UISizes.MD,
  },
};

const FilledLG: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: UISizes.LG,
  },
};

const FilledXL: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: UISizes.XL,
  },
};

const FilledXXL: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    size: UISizes.XXL,
  },
};

const FilledPrimary: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    color: UIColors.PRIMARY,
  },
};

const FilledSecondary: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    color: UIColors.SECONDARY,
  },
};

const FilledAccent: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    color: UIColors.ACCENT,
  },
};

const FilledSuccess: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    color: UIColors.SUCCESS,
  },
};

const FilledWarinng: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    color: UIColors.WARNING,
  },
};

const FilledError: Story = {
  args: {
    variant: ButtonVariants.FILLED,
    color: UIColors.ERROR,
  },
};

export {
  Text,
  Filled,
  Outlined,
  FilledXS,
  FilledSM,
  FilledMD,
  FilledLG,
  FilledXL,
  FilledXXL,
  FilledPrimary,
  FilledSecondary,
  FilledAccent,
  FilledSuccess,
  FilledWarinng,
  FilledError,
};

export default meta;
