import React, { PureComponent } from 'react';
import cx from 'classnames';

import SUIT from '../../../utils/SUIT';
import { SUIT_PREFIX } from '../../../constants';
import DateUtils from '../utils/DateUtils';
import { ConnectedCalendarDay } from '../day/CalendarDay';
import { defaultProps, propTypes } from './CalendarWeek.props';

import './style.scss';
import withPropTypes from '../../../utils/withPropTypes';
import range from '../utils/range';
import { mapWithCalendarContextConsumer } from '../CalendarContext';

class CalendarWeek extends PureComponent {
  renderDays = () => {
    const { day, month, locale } = this.props;
    const startOfWeek = DateUtils.getters.getStartOfWeek(day, locale);
    const modulus = 7;
    return range(modulus).map(offset => {
      const currentDay = DateUtils.addition.addDays(startOfWeek, offset);
      return <ConnectedCalendarDay key={offset} day={currentDay} month={month} />;
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

const CalendarWeekTyped = withPropTypes({
  propTypes,
  defaultProps,
})(CalendarWeek);

export const ConnectedCalendarWeek = mapWithCalendarContextConsumer((derivedProps, ownProps) => ({
  ...ownProps,
  ...derivedProps,
  day:
    ownProps.day !== undefined
      ? ownProps.day
      : derivedProps.selectedDay !== undefined
      ? derivedProps.selectedDay
      : derivedProps.day,
  locale: ownProps.locale !== undefined ? ownProps.locale : derivedProps.locale,
}))(CalendarWeekTyped);

export default CalendarWeekTyped;
