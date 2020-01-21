import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * Class names to be added to the outer container of the datepicker.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  /**
   * This is the initial value of an uncontrolled form element.
   */
  defaultValue: PropTypes.instanceOf(Date),
  /**
   * Disables the input and prevents editing the contents.
   */
  disabled: PropTypes.bool,
  /**
   * Every input must have a unique ID in order to support keyboard navigation and ARIA support.
   */
  id: PropTypes.string,
  /**
   * This label appears above the input.
   */
  label: PropTypes.string,
  /**
   * Name of the submitted form parameter.
   */
  name: PropTypes.string.isRequired,
  /**
   * Text that will appear in an empty input.
   */
  placeholder: PropTypes.string,
  /**
   * Inline styles of the input.
   */
  style: PropTypes.string,
  /**
   * This label appears beyond the input.
   */
  sublabel: PropTypes.string,
  /**
   * The input is a controlled component, and will always display this value.
   */
  value: PropTypes.instanceOf(Date),

  /**
   * The locale configuration of the user
   */
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
  /**
   * the format of the dates given and returned
   * default: 'dd/MM/YYYY'
   */
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  /**
   *  The format of the Week days
   */
  formatWeekDay: PropTypes.func,
  /**
   * The shape of the marked days
   */
  shape: PropTypes.oneOf(['circle', 'square']).isRequired,
  /**
   * Triggered every time the calendar changes the visible month if function value is given.
   */
  onMonthChange: PropTypes.func,
  /**
   * delay of the opening transitions.
   */
  transitionDuration: PropTypes.number,
};

export const defaultProps = {
  transitionDuration: 500,
  dateFormat: 'LLLL yyyy',
  name: '',
  placeholder: 'select a date',
  format: 'dd/MM/yyyy',
  formatWeekDay: (day = '') => day.substring(0, 3),
  shape: 'square',
};
