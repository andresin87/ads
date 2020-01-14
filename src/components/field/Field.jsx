import React from "react";
import cx from "classnames";
import withPropTypes from '../../utils/withPropTypes';
import { defaultProps, propTypes } from './Field.props';

const Field = ({ className, disabled, id, label, sublabel, ...otherProps }) => (
  <div
    {...{
      className,
      disabled,
      id,
      label,
      sublabel
    }}
  >
    <span>{label}</span>
    {children}
    <span>{sublabel}</span>
  </div>
);

export default withPropTypes({
  propTypes,
  defaultProps
})(Field);
