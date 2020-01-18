import React, { PureComponent } from 'react';
import cx from 'classnames';

import SUIT from '../../../utils/SUIT';
import { SUIT_PREFIX } from '../../../constants';
import DateUtils from '../utils/DateUtils';
import CalendarDay from '../day/CalendarDay';
import { defaultProps, propTypes } from './CalendarWeek.props'

import './style.scss';
import withPropTypes from '../../../utils/withPropTypes';
import range from '../utils/range';

class CalendarWeek extends PureComponent {
  renderDays = () => {
    const { day, month, locale } = this.props;
    const startOfWeek = DateUtils.getters.getStartOfWeek(day, locale);
    return range(7).map(offset => {
        const currentDay = DateUtils.addition.addDays(startOfWeek, offset);
        return <CalendarDay key={offset} day={currentDay} month={month} />;
      });
  };
  render() {
    return (
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarWeek',
          }),
        ])}
      >
        {this.renderDays()}
      </div>
    );
  }
}

export default withPropTypes({
  propTypes,
  defaultProps,
})(CalendarWeek);
