import React from 'react';
import CalendarWeek from './CalendarWeek';
import { getLocaleName, registerLocale } from '../Calendar';
import localeES from "date-fns/locale/es";

export default {
  title: 'ADS|Molecule/Calendar.Week',

  parameters: {
    component: null,
  },
};

export const standard = () => <CalendarWeek />;

export const locale = () => {
  const localeName = getLocaleName({
    languageCode: 'es',
  });
  registerLocale(localeName, localeES);
  return <CalendarWeek locale={localeName} />;
};
