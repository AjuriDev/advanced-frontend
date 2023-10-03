import type { Preview } from '@storybook/react';
import {
  StyleDecorator,
  RouterDecorator,
} from '../../src/shared/config/storybook';
import { Themes } from '../../src/shared/lib/constants';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    themes: {
      default: Themes.DARK,
      list: [
        { name: Themes.DARK, class: 'theme--dark', color: '#263238' },
        { name: Themes.LIGHT, class: 'theme--light', color: '#e3f6f5' },
      ],
    },
  },
  decorators: [StyleDecorator, RouterDecorator],
};

export default preview;
