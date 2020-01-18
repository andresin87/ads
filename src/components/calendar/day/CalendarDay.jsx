import React, { PureComponent } from 'react';
import cx from 'classnames';

import SUIT from '../../../utils/SUIT';
import { SUIT_PREFIX } from '../../../constants';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from './CalendarDay.props';
import DateUtils from '../utils/DateUtils';

import './style.scss';

class CalendarDay extends PureComponent {
  render() {
    const { day } = this.props;
    return (
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarDay',
          }),
        ])}
      >
        {DateUtils.getters.getDate(day)}
      </div>
    );
  }
}

export default withPropTypes({
  propTypes,
  defaultProps,
})(CalendarDay);
