import PropTypes from 'prop-types';
import DateUtils from '../utils/DateUtils';

export const propTypes = {
  /**
   * The calendar day value
   */
  day: PropTypes.instanceOf(Date).isRequired,
  /**
   * The locale configuration of the user
   */
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
};

export const defaultProps = {
  day: new Date(),
  month: DateUtils.getters.getMonth(new Date()),
  format: 'yyyy-MM-dd',
};
