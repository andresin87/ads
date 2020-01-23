import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Input from './Input';

export default {
  title: 'Adevinta-DS|Atom/Input',

  parameters: {
    component: Input,
  },
};

export const standard = () => <Input name="input" />;

export const knobs = () => (
  <Input
    disabled={boolean('disabled', false)}
    label={text('label', 'label')}
    name={text('name', 'input')}
    placeholder={text('placeholder', 'placeholder')}
    sublabel={text('sublabel', 'sublabel')}
    tone={select(
      'tone',
      [undefined, 'default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'],
      undefined,
    )}
    value={text('value', 'value')}
  />
);

knobs.story = {
  decorators: [withKnobs],
};
