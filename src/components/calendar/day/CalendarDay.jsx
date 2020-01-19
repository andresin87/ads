import React, { PureComponent } from 'react';
import cx from 'classnames';

import SUIT from '../../../utils/SUIT';
import { SUIT_PREFIX } from '../../../constants';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from './CalendarDay.props';
import DateUtils from '../utils/DateUtils';
import { mapWithCalendarContextConsumer } from '../CalendarContext';
import Typography from '../../typography/Typography';

import './style.scss';

class CalendarDay extends PureComponent {
  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };
  render() {
    const today = new Date();
    const { className, day, month, locale, selectedDay, shape, handleOnClick } = this.props;
    const localeObject = DateUtils.localization.getLocaleObject(locale);
    const weekStartsOn = localeObject ? localeObject.options.weekStartsOn : 0;
    const modulus = 7;
    const offset = DateUtils.getters.getDay(day);
    return (
      <div
        onClick={() => handleOnClick(day)}
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarDay',
          }),
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarDay',
            modifierName: DateUtils.comparators.isDayInMonth(day, month) ? 'proper' : 'foreign',
          }),
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarDay',
            modifierName: shape,
          }),
          DateUtils.comparators.isSameDay(today, day)
            ? SUIT.createComponentName({
                namespace: SUIT_PREFIX,
                componentName: 'CalendarDay',
                modifierName: 'today',
              })
            : '',
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'CalendarDay',
            modifierName: [0, modulus - 1].includes((offset + weekStartsOn) % modulus)
              ? 'weekendDay'
              : 'weekDay',
          }),
          DateUtils.comparators.isSameDay(selectedDay, day)
            ? SUIT.createComponentName({
                namespace: SUIT_PREFIX,
                componentName: 'CalendarDay',
                componentState: 'selected',
              })
            : '',
          className,
        ])}
      >
        <Typography>{DateUtils.getters.getDate(day)}</Typography>
      </div>
    );
  }
}

const CalendarDayTyped = withPropTypes({
  propTypes,
  defaultProps,
})(CalendarDay);

export const ConnectedCalendarDay = mapWithCalendarContextConsumer(
  ({ locale, selectedDay, shape, handleOnClick }, ownProps) => ({
    ...ownProps,
    ...(ownProps.locale === undefined && { locale }),
    handleOnClick,
    selectedDay,
    shape,
  }),
)(CalendarDayTyped);

export default CalendarDayTyped;
