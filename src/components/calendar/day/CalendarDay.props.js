import PropTypes from 'prop-types';

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
  format: 'yyyy-MM-dd',
};