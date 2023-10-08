import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const StyleDecorator: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export default StyleDecorator;
