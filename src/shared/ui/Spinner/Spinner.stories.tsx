import type { Meta, StoryObj } from '@storybook/react';

import { UISizes } from 'shared/lib/constants/ui';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'shared/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const SizeXS: Story = {
  args: {
    size: UISizes.XS,
  },
};

const SizeSM: Story = {
  args: {
    size: UISizes.SM,
  },
};

const SizeMD: Story = {
  args: {
    size: UISizes.MD,
  },
};

const SizeLG: Story = {
  args: {
    size: UISizes.LG,
  },
};

const SizeXL: Story = {
  args: {
    size: UISizes.XL,
  },
};

const SizeXXL: Story = {
  args: {
    size: UISizes.XXL,
  },
};

export {
  SizeXS, SizeSM, SizeMD, SizeLG, SizeXL, SizeXXL,
};
export default meta;
