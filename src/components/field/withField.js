import React from 'react';

import Field from './Field';

const withField = (Component, elementName) => props => (
  <Field
    {...{
      ...props,
      ...(elementName !== undefined && { elementName }),
    }}
  >
    <Component {...props} />
  </Field>
);

export default withField;
