import React from 'react';
import localeES from 'date-fns/locale/es';

import CalendarMonth from './CalendarMonth';
import { getLocaleName, registerLocale } from '../Calendar';

export default {
  title: 'Adevinta-DS|Molecule/Calendar.Month',

  parameters: {
    component: CalendarMonth,
  },
};

export const standard = () => <CalendarMonth />;

export const locale = () => {
  const localeName = getLocaleName({
    languageCode: 'es',
  });
  registerLocale(localeName, localeES);
  return <CalendarMonth locale={localeName} />;
};
