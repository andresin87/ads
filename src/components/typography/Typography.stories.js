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
    <p>
      The user can use default Text using <Typography>Typography</Typography> tag.
    </p>
    <p>
      For titles use:
      <ul>
        <li>
          <Typography.H1>Typography.H1</Typography.H1>
        </li>
        <li>
          <Typography.H2>Typography.H2</Typography.H2>
        </li>
        <li>
          <Typography.H3>Typography.H3</Typography.H3>
        </li>
        <li>
          <Typography.H4>Typography.H4</Typography.H4>
        </li>
      </ul>
    </p>
    <p>
      For text formats:
      <ul>
        <li>
          <Typography.B>Typography.B</Typography.B>
        </li>
        <li>
          <Typography.Em>Typography.Em</Typography.Em>
        </li>
        <li>
          <Typography.U>Typography.U</Typography.U>
        </li>
        <li>
          <Typography.S>Typography.S</Typography.S>
        </li>
        <li>
          <Typography.Sub>Typography.Sub</Typography.Sub>
        </li>
        <li>
          <Typography.Sup>Typography.Sup</Typography.Sup>
        </li>
      </ul>
    </p>
    <p>
      For Sizes:
      <ul>
        <li><Typography.Big>Typography.Big</Typography.Big></li>
        <li><Typography.Small>Typography.Small</Typography.Small></li>
      </ul>
    </p>
    <p>
      There are also some extra types like:
      <ul>
        <li><Typography.Label>Typography.Label</Typography.Label></li>
        <li><Typography.P>Typography.P</Typography.P></li>
        <li><Typography.Q>Typography.Q</Typography.Q></li>
      </ul>
    </p>
  </div>
);
