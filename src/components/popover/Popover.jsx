import React, { cloneElement } from 'react';
import cx from 'classnames';
import MUIPopover from '@material-ui/core/Popover';

import withPropTypes from '../../utils/withPropTypes';
import { defaultProps, propTypes } from './Popover.props';
import SUIT from '../../utils/SUIT';
import { SUIT_PREFIX } from '../../constants';

import './style.scss';

const Popover = props => (
  <div
    className={cx([
      SUIT.createComponentName({
        namespace: SUIT_PREFIX,
        componentName: 'Popover',
      }),
      props.className,
    ])}
  >
    <MUIPopover {...props}>
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Popover',
            descendentName: 'inner',
          }),
        ])}
      >
        {cloneElement(props.children, {
          ...props.children.props,
        })}
      </div>
    </MUIPopover>
  </div>
);

export default withPropTypes({
  propTypes,
  defaultProps,
})(Popover);
