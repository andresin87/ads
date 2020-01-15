import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Typography from './Typography';

export default {
  title: 'ADS|Atom/Typography',

  parameters: {
    component: Typography,
  },
};

export const standard = () => <Typography>Typography</Typography>;

export const knobs = () => (
  <Typography
    htmlElement={text('htmlElement', 'span')}
    tone={select('tone', [undefined, 'default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'], undefined)}
  >
    {text('children', 'children')}
  </Typography>
);

knobs.story = {
  decorators: [withKnobs],
};

export const variations = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography.B>Typography.B</Typography.B>
    <Typography.Label>Typography.Label</Typography.Label>
    <Typography.Sub>Typography.Sub</Typography.Sub>
    <Typography.Sup>Typography.Sup</Typography.Sup>
  </div>
);
