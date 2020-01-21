import React from 'react';

import { propTypes, defaultProps } from './Input.props';

import withPropTypes from '../../utils/withPropTypes';
import withField from '../field/withField';

import './style.scss';

const Input = props => <input aria-label={props.name} {...props} />;

export default withField(
  withPropTypes({
    propTypes,
    defaultProps,
  })(Input),
  'Input',
);
