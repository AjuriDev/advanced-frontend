import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/theme';

const ThemeDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export default ThemeDecorator;
