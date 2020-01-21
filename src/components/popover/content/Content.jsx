import React from 'react';

import { Consumer } from '../context';
import Popper from '../popper/Popper';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from './Content.props';

const Content = ({ children }) => (
  <Consumer>
    {({ placement, targetNode, showPopover }) => showPopover ? (
      <Popper placement={placement} target={targetNode}>
        {children}
      </Popper>
    ) : null}
  </Consumer>
);

export default withPropTypes({
  propTypes,
  defaultProps,
})(Content);
