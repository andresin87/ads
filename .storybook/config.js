import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { themes } from '@storybook/theming';

import '../src/styles/styles.scss';

// global decorators
addDecorator(withA11y);

// global parameters
addParameters({
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal },
  },
});

// automatically import all files ending in *.stories.(md|js)(x)
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module,
);
