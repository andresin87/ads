import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * The calendar day value
   */
  day: PropTypes.instanceOf(Date).isRequired,
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
  day: new Date(),
  format: 'yyyy-MM-dd',
  formatWeekDay: (day = '') => day.substring(0, 3),
};
