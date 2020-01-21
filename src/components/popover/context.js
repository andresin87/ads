import React, { createContext, forwardRef } from 'react';

export const { Provider, Consumer } = createContext();

export const connect = (
  propsMapper = (props, ownProps, ref) => ({
    ...props,
    ...ownProps,
    ref,
  }),
) => Component => forwardRef((ownProps, ref) => {
  return (
    <Consumer>
      {derivedProps => React.createElement(Component, propsMapper(derivedProps, ownProps, ref))}
    </Consumer>
  );
});
