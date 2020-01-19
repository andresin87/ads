import React, { createContext } from 'react';

const CalendarContext = createContext({
  day: new Date(),
  locale: undefined,
});

export const CalendarContextProvider = ({ children, ...otherProps }) => (
  <CalendarContext.Provider value={{ ...otherProps }}>{children}</CalendarContext.Provider>
);

export const CalendarContextConsumer = CalendarContext.Consumer;

export const mapWithCalendarContextConsumer = (
  propsMapper = (props, ownProps) => {
    const { locale, selectedDay } = props;
    return {
      ...props,
      selectedDay,
      ...(ownProps.locale === undefined && { locale }),
    };
  },
) => Component => ownProps => {
  return (
    <CalendarContextConsumer>
      {derivedProps => React.createElement(Component, propsMapper(derivedProps, ownProps))}
    </CalendarContextConsumer>
  );
};

export default CalendarContext;
