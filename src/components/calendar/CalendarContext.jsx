import React, { createContext } from 'react';
import { Tabs as AntTabs } from 'antd';

const CalendarContext = createContext({
  day: new Date(),
  locale: undefined,
});

export const CalendarContextProvider = ({ value, locale, children }) => (
  <CalendarContext.Provider value={{ value, locale }}>{children}</CalendarContext.Provider>
);

export const CalendarContextConsumer = CalendarContext.Consumer;

export const mapWithCalendarContextConsumer = (
  propsMapper = props => props,
) => Component => ownProps => (
  <CalendarContextConsumer>
    {(value, locale) =>
      React.createElement(
        Component,
        propsMapper({
          ...ownProps,
          value,
          ...(ownProps.locale === undefined && { locale }),
        }),
      )
    }
  </CalendarContextConsumer>
);

export default CalendarContext;
