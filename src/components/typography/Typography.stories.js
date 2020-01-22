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

export const titles = () => (
  <>
    <Typography.H1>Typography.H1</Typography.H1>
    <Typography.H2>Typography.H2</Typography.H2>
    <Typography.H3>Typography.H3</Typography.H3>
    <Typography.H4>Typography.H4</Typography.H4>
  </>
);

export const text_formats = () => (
  <>
    <div>
      <Typography.B>Typography.B</Typography.B>
    </div>
    <div>
      <Typography.Em>Typography.Em</Typography.Em>
    </div>
    <div>
      <Typography.U>Typography.U</Typography.U>
    </div>
    <div>
      <Typography.S>Typography.S</Typography.S>
    </div>
    <div>
      <Typography.Sub>Typography.Sub</Typography.Sub>
    </div>
    <div>
      <Typography.Sup>Typography.Sup</Typography.Sup>
    </div>
  </>
);

export const text_sizes = () => (
  <>
    <div>
      <Typography.Big>Typography.Big</Typography.Big>
    </div>
    <div>
      <Typography>Typography</Typography>
    </div>
    <div>
      <Typography.Small>Typography.Small</Typography.Small>
    </div>
  </>
);

export const extra = () => (
  <>
    <div>
      <Typography.Label>Typography.Label</Typography.Label>
    </div>
    <div>
      <Typography.P>Typography.P</Typography.P>
    </div>
    <div>
      <Typography.Q>Typography.Q</Typography.Q>
    </div>
  </>
);

export const tone = () => (
  <>
    <div>
      <Typography tone={undefined}>Typography tone="undefined"</Typography>
    </div>
    <div>
      <Typography tone={'default'}>Typography tone="default"</Typography>
    </div>
    <div>
      <Typography tone={'primary'}>Typography tone="primary"</Typography>
    </div>
    <div>
      <Typography tone={'secondary'}>Typography tone="secondary"</Typography>
    </div>
    <div>
      <Typography tone={'warning'}>Typography tone="warning"</Typography>
    </div>
    <div>
      <Typography tone={'danger'}>Typography tone="danger"</Typography>
    </div>
    <div>
      <Typography tone={'info'}>Typography tone="info"</Typography>
    </div>
    <div>
      <Typography tone={'success'}>Typography tone="success"</Typography>
    </div>
  </>
);

export const knobs = () => (
  <Typography
    htmlElement={text('htmlElement', 'span')}
    tone={select(
      'tone',
      [undefined, 'default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'],
      undefined,
    )}
  >
    {text('children', 'children')}
  </Typography>
);

knobs.story = {
  decorators: [withKnobs],
};
