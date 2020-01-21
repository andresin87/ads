import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * Time in milliseconds to wait before showing and hiding the tooltip. Defaults to 500.
   */
  transitionDuration: PropTypes.number,
};

export const defaultProps = {
  transitionDuration: 500
};
