import React, { createContext } from 'react';
import { Tabs as AntTabs } from 'antd';

const CalendarContext = createContext({
  day: new Date(),
  locale: undefined,
});

export const CalendarContextProvider = ({ children, ...otherProps }) => (
  <CalendarContext.Provider value={{ ...otherProps }}>{children}</CalendarContext.Provider>
);

export const CalendarContextConsumer = CalendarContext.Consumer;

export const mapWithCalendarContextConsumer = (
  propsMapper = (contextProps, ownProps) => {
    const { locale, ...otherContextProps } = contextProps;
    return {
      ...ownProps,
      ...otherContextProps,
      ...(ownProps.locale === undefined && { locale }),
    };
  },
) => Component => ownProps => (
  <CalendarContextConsumer>
    {contextProps => React.createElement(Component, propsMapper(contextProps, ownProps))}
  </CalendarContextConsumer>
);

export default CalendarContext;
