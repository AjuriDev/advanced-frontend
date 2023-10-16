import type { Meta, StoryObj } from '@storybook/react';

import { UIViewTypes } from 'shared/lib/constants/ui';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {},
};

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithPlaceholder: Story = {
  args: {
    placeholder: 'Введите значение',
  },
};

const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

const WithHint: Story = {
  args: {
    hint: 'Some hint',
  },
};

const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Some hint',
  },
};

const Secondary: Story = {
  args: {
    view: UIViewTypes.SECONDARY,
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Some hint',
  },
};

const Accent: Story = {
  args: {
    view: UIViewTypes.ACCENT,
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Some hint',
  },
};

const Success: Story = {
  args: {
    view: UIViewTypes.SUCCESS,
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Some hint',
  },
};

const Warning: Story = {
  args: {
    view: UIViewTypes.WARNING,
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Some hint',
  },
};

const Error: Story = {
  args: {
    view: UIViewTypes.ERROR,
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Some hint',
  },
};

export {
  Default,
  WithPlaceholder,
  WithLabel,
  WithHint,
  Primary,
  Secondary,
  Accent,
  Success,
  Warning,
  Error,
};

export default meta;
