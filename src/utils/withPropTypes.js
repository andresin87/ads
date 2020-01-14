/* eslint-disable react/forbid-foreign-prop-types */
export default ({ propTypes, defaultProps }) => Component => {
  Component.propTypes = propTypes;
  Component.defaultProps = defaultProps;
  return Component;
};
/* eslint-enable react/forbid-foreign-prop-types */
