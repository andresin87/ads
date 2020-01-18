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

export const variations = () => {
  const style = { display: 'flex', flexDirection: 'column', margin: 16 };
  return (
    <div style={style}>
      <p>
        The user can use default Text using <Typography>Typography</Typography> tag.
      </p>
      <p>
        For titles use:
        <Typography.H1>Typography.H1</Typography.H1>
        <Typography.H2>Typography.H2</Typography.H2>
        <Typography.H3>Typography.H3</Typography.H3>
        <Typography.H4>Typography.H4</Typography.H4>
      </p>
      <p>
        For text formats:
        <div style={style}>
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
        </div>
      </p>
      <p>
        For Sizes:
        <div style={style}>
          <div>
            <Typography.Big>Typography.Big</Typography.Big>
          </div>
          <div>
            <Typography>Typography</Typography>
          </div>
          <div>
            <Typography.Small>Typography.Small</Typography.Small>
          </div>
        </div>
      </p>
      <p>
        There are also some extra types like:
        <div style={style}>
          <div>
            <Typography.Label>Typography.Label</Typography.Label>
          </div>
          <div>
            <Typography.P>Typography.P</Typography.P>
          </div>
          <div>
            <Typography.Q>Typography.Q</Typography.Q>
          </div>
        </div>
      </p>
    </div>
  );
};
