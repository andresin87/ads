import React from "react";

import Field from "./Field";

const withField = Component => ({
  className,
  disabled,
  id,
  label,
  sublabel,
  ...otherProps
}) => (
  <Field
    {...{
      className,
      disabled,
      id,
      label,
      sublabel
    }}
  >
    <Component
      {...{
        className,
        disabled,
        id,
        label,
        sublabel,
        ...otherProps
      }}
    />
  </Field>
);
