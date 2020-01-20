import PropTypes from 'prop-types';

export const propTypes = {
  tone: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'warning',
    'danger',
    'info',
    'success',
  ]),
};

export const defaultProps = {};
