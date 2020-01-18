import React, { PureComponent } from 'react';
import cx from 'classnames';

import SUIT from '../../../utils/SUIT';
import { SUIT_PREFIX } from '../../../constants';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from './CalendarDay.props';
import DateUtils from '../utils/DateUtils';
import Typography from '../../typography/Typography';

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
        <Typography>{DateUtils.getters.getDate(day)}</Typography>
      </div>
    );
  }
}

export default withPropTypes({
  propTypes,
  defaultProps,
})(CalendarDay);