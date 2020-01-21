import React, { forwardRef } from 'react';

import Field from './Field';

const withField = (Component, elementName) =>
  forwardRef((props, ref) => (
    <Field
      {...{
        ...props,
        ...(elementName !== undefined && { elementName }),
      }}
    >
      <Component ref={ref} {...props} />
    </Field>
  ));

export default withField;
