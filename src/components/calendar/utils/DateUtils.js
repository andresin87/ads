import isDate from 'date-fns/isDate';
import isValidDate from 'date-fns/isValid';
import format from 'date-fns/format';
import dfIsEqual from 'date-fns/isEqual';
import dfIsSameMonth from 'date-fns/isSameMonth';
import getDate from 'date-fns/getDate';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import getDay from 'date-fns/getDay';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfMonth from 'date-fns/endOfMonth';
import isAfter from 'date-fns/isAfter';
import addDays from 'date-fns/addDays';
import addWeeks from 'date-fns/addWeeks';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import toDate from 'date-fns/toDate';
import parseISO from 'date-fns/parseISO';
import isBefore from 'date-fns/isBefore';

// ** Date "Reflection" **
const isValid = date => {
  return isValidDate(date) && isAfter(date, new Date('1/1/1000'));
};

// ** Date Constructors **

const newDate = value => {
  const d = value ? (typeof value === 'string' || value instanceof String ? parseISO(value) : toDate(value)) : new Date();
  return isValid(d) ? d : null;
};

// ** Date Formatting **
const formatDate = (date, formatStr, locale) => {
  if (locale === 'en') {
    return format(date, formatStr, { awareOfUnicodeTokens: true });
  }
  let localeObj = getLocaleObject(locale);
  if (locale && !localeObj) {
    console.warn(`A locale object was not found for the provided string ["${locale}"].`);
  }
  if (!localeObj && !!getDefaultLocale() && !!getLocaleObject(getDefaultLocale())) {
    localeObj = getLocaleObject(getDefaultLocale());
  }
  return format(date, formatStr, {
    locale: localeObj ? localeObj : null,
    awareOfUnicodeTokens: true,
  });
};

// ** Date Localization **
/**
 * getLocaleName
 *
 * @param languageCode - ISO 639-1/2  (required)
 * @param scriptCode   - ISO 15924
 * @param countryCode  - ISO 3166
 * @param variant      - unicode.org
 * @param extensions   - iana.org
 *
 * @returns localeName {string}
 */
const getLocaleName = ({
  languageCode, // ISO 639-1/2  (required)
  scriptCode, // ISO 15924
  countryCode, // ISO 3166
  variant, // unicode.org
  extensions, // iana.org
}) => {
  const setParameter = param => (param !== undefined ? `-${param}` : '');
  return `${languageCode}${setParameter(scriptCode)}${setParameter(countryCode)}${setParameter(variant)}${setParameter(extensions)}`;
};

const registerLocale = (localeName, localeData) => {
  const scope = typeof window !== 'undefined' ? window : global;
  if (!scope.__localeData__) {
    scope.__localeData__ = {};
  }
  scope.__localeData__[localeName] = localeData;
};

const setDefaultLocale = localeName => {
  const scope = typeof window !== 'undefined' ? window : global;
  scope.__localeId__ = localeName;
};

const getDefaultLocale = () => {
  const scope = typeof window !== 'undefined' ? window : global;
  return scope.__localeId__;
};

const getLocaleObject = localeSpec => {
  if (typeof localeSpec === 'string') {
    // Treat it as a locale name registered by registerLocale
    const scope = typeof window !== 'undefined' ? window : global;
    return scope.__localeData__ ? scope.__localeData__[localeSpec] : null;
  } else {
    // Treat it as a raw date-fns locale object
    return localeSpec;
  }
};

const getFormattedWeekdayInLocale = (date, formatFunc, locale) => {
  return formatFunc(formatDate(date, 'EEEE', locale));
};

// *** Start of ***
const getStartOfWeek = (date, locale) => {
  let localeObj = locale ? getLocaleObject(locale) : getLocaleObject(getDefaultLocale());
  return startOfWeek(date, { locale: localeObj });
};
const getStartOfMonth = date => startOfMonth(date);

// *** End of ***
const getEndOfWeek = date => endOfWeek(date);

const getEndOfMonth = date => endOfMonth(date);

// ** Date Math **

// ** Date Comparison **
const isEqual = (date1, date2) => {
  if (date1 && date2) {
    return dfIsEqual(date1, date2);
  } else {
    return !date1 && !date2;
  }
};

const isWeekend = (date, locale) => {
  const modulus = 7;
  const day = getDay(date);
  const localeObject = DateUtils.localization.getLocaleObject(locale);
  const weekStartsOn = localeObject ? localeObject.options.weekStartsOn : 0;
  return [0, modulus - 1].includes((day + weekStartsOn) % modulus);
};

const isSameMonth = (date1, date2) => {
  if (date1 && date2) {
    return dfIsSameMonth(date1, date2);
  } else {
    return !date1 && !date2;
  }
};

const isDayInMonth = (currentDay, month) => {
  return getMonth(currentDay) === month;
};

const isWeekInMonth = (currentDay, day) => {
  const startOfWeek = getStartOfWeek(currentDay);
  const endOfWeek = getEndOfWeek(currentDay);
  return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
};

export default class DateUtils {
  // ** Date Constructors **
  static constructors = {
    newDate,
  };

  // ** Date "Reflection" **
  static reflection = {
    isDate,
    isValid,
  };
  // ** Date Formatting **
  static format = {
    formatDate,
  };
  // ** Date Localization **
  static localization = {
    getLocaleName,
    getDefaultLocale,
    getLocaleObject,
    registerLocale,
    setDefaultLocale,
    getFormattedWeekdayInLocale,
  };
  // ** Date Getters **
  static getters = {
    getMonth, // returns month of year
    getYear, // returns year
    getDay, // returns day of week
    getDate, // returns day of month
    // *** Start of ***
    getStartOfWeek,
    getStartOfMonth,
    // *** End of ***
    getEndOfWeek,
    getEndOfMonth,
  };

  static comparators = {
    isEqual,
    isDayInMonth,
    isWeekend,
    isSameMonth,
    isWeekInMonth,
  };

  // ** Date Math **
  // *** Addition ***
  static addition = {
    addDays,
    addWeeks,
    addMonths,
    addYears,
  };
}
