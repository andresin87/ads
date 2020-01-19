import React, { PureComponent } from 'react';
import cx from 'classnames';

import { ConnectedCalendarMonth } from './month/CalendarMonth';
import DateUtils from './utils/DateUtils';
import range from './utils/range';
import SUIT from '../../utils/SUIT';
import { defaultProps, propTypes } from './Calendar.props';
import withPropTypes from '../../utils/withPropTypes';
import { CalendarContextProvider } from './CalendarContext';
import { SUIT_PREFIX } from '../../constants';
import Typography from '../typography/Typography';

import './style.scss';

const {
  getDefaultLocale,
  registerLocale,
  setDefaultLocale,
  getLocaleName,
} = DateUtils.localization;

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
    const { locale, dateFormat } = this.props;
    const startOfWeek = DateUtils.getters.getStartOfWeek(date, locale);
    const localeObject = DateUtils.localization.getLocaleObject(locale);
    const weekStartsOn = localeObject ? localeObject.options.weekStartsOn : 0;
    const modulus = 7;
    const weekDayNames = range(modulus).map(offset => {
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
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'CalendarDay',
              descendentName: 'weekDayName',
              modifierName: [0, modulus - 1].includes((offset + weekStartsOn) % modulus)
                ? 'weekendDay'
                : 'weekday',
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
            descendentName: 'header',
          }),
        ])}
      >
        <div
          className={cx([
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'Calendar',
              descendentName: 'monthArea',
            }),
          ])}
        >
          <div
            className={cx([
              SUIT.createComponentName({
                namespace: SUIT_PREFIX,
                componentName: 'Calendar',
                descendentName: 'previousMonth',
              }),
            ])}
            onClick={this.decreaseMonth}
          >
            ←
          </div>
          <div
            className={cx([
              SUIT.createComponentName({
                namespace: SUIT_PREFIX,
                componentName: 'Calendar',
                descendentName: 'currentMonth',
              }),
            ])}
          >
            <Typography.Big>{DateUtils.format.formatDate(date, dateFormat, locale)}</Typography.Big>
          </div>
          <div
            className={cx([
              SUIT.createComponentName({
                namespace: SUIT_PREFIX,
                componentName: 'Calendar',
                descendentName: 'nextMonth',
              }),
            ])}
            onClick={this.increaseMonth}
          >
            →
          </div>
        </div>
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
      </div>
    );
  };
  increaseMonth = () => {
    this.setState(
      ({ date }) => ({
        date: DateUtils.addition.addMonths(date, 1),
      }),
      () => this.handleMonthChange(this.state.date),
    );
  };
  decreaseMonth = () => {
    this.setState(
      ({ date }) => ({
        date: DateUtils.substraction.subMonths(date, 1),
      }),
      () => this.handleMonthChange(this.state.date),
    );
  };

  handleMonthChange = date => {
    if (this.props.onMonthChange) {
      this.props.onMonthChange(date);
    }
  };

  render() {
    const { locale, shape } = this.props;
    const { date } = this.state;
    return (
      <CalendarContextProvider {...{ selectedDay: date, locale, shape }}>
        <div
          className={cx([
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'Calendar',
            }),
          ])}
        >
          {this.header()}
          <ConnectedCalendarMonth />
        </div>
      </CalendarContextProvider>
    );
  }
}

export { registerLocale, setDefaultLocale, getDefaultLocale, getLocaleName };

export default withPropTypes({
  propTypes,
  defaultProps,
})(Calendar);
