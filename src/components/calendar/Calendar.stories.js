import React from 'react';
import localeES from 'date-fns/locale/es';

import Calendar, { registerLocale, getLocaleName } from './Calendar';

export default {
  title: 'Adevinta-DS|Molecule/Calendar',

  parameters: {
    component: null,
  },
};

export const standard = () => {
  return <Calendar />;
};

export const locale = () => {
  const localeName = getLocaleName({
    languageCode: 'es',
  });
  registerLocale(localeName, localeES);
  return <Calendar locale={localeName} />;
};
