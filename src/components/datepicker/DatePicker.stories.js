import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import DatePicker from './DatePicker';

export default {
  title: 'ADS|Molecule/DatePicker',

  parameters: {
    component: DatePicker,
  },
};

export const standard = () => <DatePicker name="input" />;

export const knobs = () => (
  <DatePicker
    disabled={boolean('disabled', false)}
    label={text('label', 'label')}
    name={text('name', 'input')}
    placeholder={text('placeholder', 'placeholder')}
    sublabel={text('sublabel', 'sublabel')}
    tone={select('tone', [undefined, 'default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'], undefined)}
    value={text('value', 'value')}
  />
);

knobs.story = {
  decorators: [withKnobs],
};
