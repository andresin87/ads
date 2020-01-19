import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * The calendar day value
   */
  day: PropTypes.instanceOf(Date).isRequired,
  /**
   *
   */
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  /**
   *  The format of the Week days
   */
  formatWeekDay: PropTypes.func,
  /**
   * The locale configuration of the user
   */
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
};

export const defaultProps = {
  dateFormat: 'LLLL yyyy',
  day: new Date(),
  format: 'yyyy-MM-dd',
  formatWeekDay: (day = '') => day.substring(0, 3),
};
