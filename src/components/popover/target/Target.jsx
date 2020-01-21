import React, { cloneElement, createRef, forwardRef } from 'react';

import { connect } from '../context';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from './Target.props';

const Target = forwardRef((props, ref) => {
  const { onMouseEnterOnTarget, onMouseLeaveFromTarget, children } = props;
  return cloneElement(children, {
    ref: ref || createRef(),
    onMouseEnter: onMouseEnterOnTarget,
    onMouseLeave: onMouseLeaveFromTarget,
  });
});

export default connect()(
  withPropTypes({
    propTypes,
    defaultProps,
  })(Target),
);
