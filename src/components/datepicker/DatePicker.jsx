import React, { PureComponent } from 'react';
import cx from 'classnames';

import { propTypes, defaultProps } from './DatePicker.props';

import DateUtils from '../calendar/utils/DateUtils';
import withPropTypes from '../../utils/withPropTypes';
import Input from '../input/Input';
import Calendar from '../calendar/Calendar';
import Popover from '../popover/Popover';
import SUIT from '../../utils/SUIT';
import { SUIT_PREFIX } from '../../constants';

import './style.scss';

class DatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      value: props.value || props.defaultValue || '',
    };
  }

  setAnchorEl = element => {
    this.setState({
      anchorEl: element,
    });
  };

  handleClick = event => {
    this.setAnchorEl(event.currentTarget);
  };

  handleClose = () => {
    this.setAnchorEl(null);
  };

  handleSelect = date => {
    const { onSelect } = this.props;
    this.setState({ value: date });
    this.handleClose();
    if (onSelect) {
      onSelect(date);
    }
  };

  render() {
    const {
      placeholder,
      onMonthChange,
      transitionDuration,
      format,
      locale,
      label,
      sublabel,
      tone,
      shape,
    } = this.props;
    const { anchorEl, value } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div
        className={cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'DatePicker',
          }),
        ])}
      >
        <Input
          className={cx([
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'DatePicker',
              descendentName: 'input',
            }),
          ])}
          tone={tone}
          label={label}
          sublabel={sublabel}
          type="text"
          placeholder={placeholder}
          onClick={this.handleClick}
          value={value !== '' ? DateUtils.format.formatDate(value, format, locale) : value}
        />
        <Popover
          transitionDuration={transitionDuration}
          open={open}
          className={cx([
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'DatePicker',
              descendentName: 'popover',
            }),
          ])}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          onClose={this.handleClose}
        >
          <Calendar
            onMonthChange={onMonthChange}
            day={value}
            onClick={this.handleSelect}
            locale={locale}
            shape={shape}
          />
        </Popover>
      </div>
    );
  }
}

DatePicker.formats = { inverse: 'yyyy/MM/dd', readable: 'dd/MM/yyyy' };

/**
 * Use datepicker as an input for date values
 */
export default withPropTypes({
  propTypes,
  defaultProps,
})(DatePicker);
