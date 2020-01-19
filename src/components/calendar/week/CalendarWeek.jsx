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
    const localeObject = DateUtils.localization.getLocaleObject(locale);
    const weekStartsOn = localeObject ? localeObject.options.weekStartsOn : 0;
    const modus = 7;
    return range(modus).map(offset => {
      const currentDay = DateUtils.addition.addDays(startOfWeek, offset);
      return (
        <ConnectedCalendarDay
          key={offset}
          day={currentDay}
          month={month}
          className={cx([
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'CalendarDay',
              modifierName: [0, modus - 1].includes((offset + weekStartsOn) % modus)
                ? 'weekendDay'
                : 'weekDay',
            }),
          ])}
        />
      );
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

export const ConnectedCalendarWeek = mapWithCalendarContextConsumer()(CalendarWeekTyped);

export default CalendarWeekTyped;
