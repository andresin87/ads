import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import '../src/styles/styles.scss';

// global decorators
addDecorator(withA11y);

// automatically import all files ending in *.stories.(md|js)(x)
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module,
);
