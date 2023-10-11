import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {},
};

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    label: 'Тест',
    placeholder: 'Введите значение',
    hint: 'Для теста',
  },
};

export {
  Default,
};

export default meta;
