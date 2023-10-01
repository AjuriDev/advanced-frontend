import { Decorator } from '@storybook/react';

import { joinClassNames as cn } from 'shared/lib/utils';
import { Themes } from 'shared/lib/constants';

import 'app/styles/_index.scss';

type DecoratorGetter = (theme?: Themes) => Decorator;

const ThemeDecorator: DecoratorGetter = (theme = Themes.DARK) => (Story) => (
  <div className={cn('app', undefined, [theme])}>
    <Story />
  </div>
);

export default ThemeDecorator;
