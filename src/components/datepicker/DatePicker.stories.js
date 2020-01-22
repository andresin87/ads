import React from 'react';

import DatePicker from './DatePicker';
import { select, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'ADS|Molecule/DatePicker',

  parameters: {
    component: DatePicker,
    componentSubtitle: 'Displays a date picker field',
  },
};

export const standard = () => <DatePicker name="datepicker" />;

export const knobs = () => (
  <DatePicker
    name="datepicker"
    label={text('label', 'label')}
    sublabel={text('sublabel', 'sublabel')}
    tone={select(
      'tone',
      [undefined, 'default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'],
      undefined,
    )}
    format={select('format', DatePicker.formats, DatePicker.formats.readable)}
  />
);

knobs.story = {
  decorators: [withKnobs],
};
