import type { Meta, StoryObj } from '@storybook/react';

import { UIViewTypes, UISizes } from 'shared/lib/constants/ui';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    text: 'Some text',
  },
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const TextLoading: Story = {
  args: { loading: true },
};

const TextXS: Story = {
  args: {
    size: UISizes.XS,
  },
};

const TextSM: Story = {
  args: {
    size: UISizes.SM,
  },
};

const TextMD: Story = {
  args: {
    size: UISizes.MD,
  },
};

const TextLG: Story = {
  args: {
    size: UISizes.LG,
  },
};

const TextXL: Story = {
  args: {
    size: UISizes.XL,
  },
};

const TextXXL: Story = {
  args: {
    size: UISizes.XXL,
  },
};

const TextPrimary: Story = {
  args: {
    view: UIViewTypes.PRIMARY,
  },
};

const TextSecondary: Story = {
  args: {
    view: UIViewTypes.SECONDARY,
  },
};

const TextAccent: Story = {
  args: {
    view: UIViewTypes.ACCENT,
  },
};

const TextSuccess: Story = {
  args: {
    view: UIViewTypes.SUCCESS,
  },
};

const TextWarning: Story = {
  args: {
    view: UIViewTypes.WARNING,
  },
};

const TextError: Story = {
  args: {
    view: UIViewTypes.ERROR,
  },
};

export {
  Default,
  TextLoading,
  TextXS,
  TextSM,
  TextMD,
  TextLG,
  TextXL,
  TextXXL,
  TextPrimary,
  TextSecondary,
  TextAccent,
  TextSuccess,
  TextWarning,
  TextError,
};

export default meta;
