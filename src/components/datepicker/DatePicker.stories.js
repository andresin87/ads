import React from 'react';

import DatePicker from './DatePicker';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import Calendar, { getLocaleName, registerLocale } from '../calendar/Calendar';
import localeES from "date-fns/locale/es";

export default {
  title: 'Adevinta-DS|Molecule/DatePicker',

  parameters: {
    component: DatePicker,
    componentSubtitle: 'Displays a date picker field',
  },
};

export const standard = () => <DatePicker name="datepicker" />;

export const knobs = () => {
  const localeName = getLocaleName({
    languageCode: 'es',
  });
  registerLocale(localeName, localeES);
  return (
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
      locale={select('locale', [undefined, localeName], undefined)}
    />
  );
}

knobs.story = {
  decorators: [withKnobs],
};
