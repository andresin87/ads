import React from 'react';

import { propTypes, defaultProps } from './Input.props';

import withPropTypes from '../../utils/withPropTypes';
import withField from '../field/withField';

const Input = props => <input {...props} />;

export default withField(
  withPropTypes({
    propTypes,
    defaultProps,
  })(Input),
  'Input',
);
