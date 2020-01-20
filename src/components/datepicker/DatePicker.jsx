import React from 'react';

import { propTypes, defaultProps } from './DatePicker.props';

import withPropTypes from '../../utils/withPropTypes';
import Input from '../input/Input';
import Calendar from '../calendar/Calendar';

const DatePicker = props => (
  <>
    <Input disabled aria-label={props.name} type="date" {...props} />
    <Calendar />
  </>
);

export default withPropTypes({
  propTypes,
  defaultProps,
})(DatePicker);
