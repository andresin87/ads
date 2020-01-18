import React, { PureComponent } from 'react';
import cx from 'classnames';

import CalendarMonth from './month/CalendarMonth';
import DateUtils from './utils/DateUtils';
import range from './utils/range';
import SUIT from '../../utils/SUIT';
import { defaultProps, propTypes } from './Calendar.props';
import withPropTypes from '../../utils/withPropTypes';
import { SUIT_PREFIX } from '../../constants';
import Typography from '../typography/Typography';

import './style.scss';

const { getDefaultLocale, registerLocale, setDefaultLocale, getLocaleName } = DateUtils.localization;

class Calendar extends PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      date: DateUtils.constructors.newDate(props.day),
    };
  }
  formatWeekday = (day, locale) => {
    const { formatWeekDay } = this.props;
    return DateUtils.localization.getFormattedWeekdayInLocale(day, formatWeekDay, locale);
  };
  header = (date = this.state.date) => {
    const { locale } = this.props;
    const startOfWeek = DateUtils.getters.getStartOfWeek(date, locale);
    const weekDayNames = range(7).map(offset => {
      const currentDay = DateUtils.addition.addDays(startOfWeek, offset);
      const weekDayName = this.formatWeekday(currentDay, locale);
      return (
        <div
          key={offset}
          className={cx([
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'Calendar',
              descendentName: 'weekDayName',
            }),
          ])}
        >
          <Typography.Small>{weekDayName}</Typography.Small>
        </div>
      );
    });
    return (
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Calendar',
            descendentName: 'weekDayNames',
          }),
        ])}
      >
        {weekDayNames}
      </div>
    );
  };
  render() {
    const { day, locale } = this.props;
    return (
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Calendar',
          }),
        ])}
      >
        {this.header()}
        <CalendarMonth day={day} locale={locale} />
      </div>
    );
  }
}

export { registerLocale, setDefaultLocale, getDefaultLocale, getLocaleName };

export default withPropTypes({
  propTypes,
  defaultProps,
})(Calendar);
