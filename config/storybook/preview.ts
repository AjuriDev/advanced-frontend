import type { Preview } from '@storybook/react';
import {StyleDecorator, ThemeDecorator, RouterDecorator} from "../../src/shared/config/storybook";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(), RouterDecorator],
};

export default preview;
