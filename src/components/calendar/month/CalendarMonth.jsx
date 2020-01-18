import React, { PureComponent } from 'react';
import cx from 'classnames';

import SUIT from '../../../utils/SUIT';
import { SUIT_PREFIX } from '../../../constants';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from './CalendarMonth.props';
import CalendarWeek from '../week/CalendarWeek';
import DateUtils from '../utils/DateUtils';

import './style.scss';

class CalendarMonth extends PureComponent {
  renderWeeks = () => {
    const { day, locale, peekNextMonth, format } = this.props;
    const weeks = [];
    let currentDay = DateUtils.getters.getStartOfMonth(day);
    let i = 0;
    let breakAfterNextPush = false;
    while (true) {
      weeks.push(<CalendarWeek key={i} day={currentDay} locale={locale} format={format} />);
      if (breakAfterNextPush) break;
      i++;
      currentDay = DateUtils.addition.addWeeks(currentDay, 1);
      // If one of these conditions is true, we will either break on this week
      // or break on the next week
      const isOutOfMonth = !DateUtils.comparators.isWeekInMonth(currentDay, day);

      if (isOutOfMonth) {
        if (peekNextMonth) {
          breakAfterNextPush = true;
        } else {
          break;
        }
      }
    }
    return weeks;
  };
  render() {
    const { day } = this.props;
    return (
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarMonth',
          }),
          {},
        ])}
        aria-label={'month-' + DateUtils.format.formatDate(day, 'yyyy-MM')}
      >
        {this.renderWeeks()}
      </div>
    );
  }
}

export default withPropTypes({
    propTypes,
    defaultProps,
  })(CalendarMonth);
