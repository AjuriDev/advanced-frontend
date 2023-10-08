import type { Preview } from '@storybook/react';
import {
  StyleDecorator,
  RouterDecorator,
  ThemeDecorator,
} from '../../src/shared/config/storybook';
import { Themes, themeClassNames } from '../../src/shared/lib/constants';

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
        {
          name: Themes.DARK,
          class: themeClassNames[Themes.DARK],
          color: '#263238',
        },
        {
          name: Themes.LIGHT,
          class: themeClassNames[Themes.LIGHT],
          color: '#e3f6f5',
        },
      ],
    },
  },
  decorators: [StyleDecorator, RouterDecorator, ThemeDecorator],
};

export default preview;
