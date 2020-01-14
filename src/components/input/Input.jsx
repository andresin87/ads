import React from "react";

import { propTypes, defaultProps } from "./Input.props";

import withPropTypes from "../../utils/withPropTypes";

const Input = props => <input {...props} />;

export default withPropTypes({
  propTypes,
  defaultProps
})(Input);
