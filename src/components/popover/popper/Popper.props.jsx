import PropTypes from 'prop-types';

export const propTypes = {
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  children: PropTypes.node.isRequired,
};

export const defaultProps = {
  placement: 'bottom',
};
