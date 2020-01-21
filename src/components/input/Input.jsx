import React, {forwardRef} from 'react';

import { propTypes, defaultProps } from './Input.props';

import withPropTypes from '../../utils/withPropTypes';
import withField from '../field/withField';

import './style.scss';

const Input = forwardRef((props, ref) => <input ref={ref} aria-label={props.name} {...props} />);

export default withField(
  withPropTypes({
    propTypes,
    defaultProps,
  })(Input),
  'Input',
);
