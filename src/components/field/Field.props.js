import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * Class names to be added to the outer container of the field.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  /**
   * Disables the field and prevents editing the contents.
   */
  disabled: PropTypes.bool,
  /**
   * Every field must have an element name.
   */
  elementName: PropTypes.string.isRequired,
  /**
   * Every field must have a unique ID in order to support keyboard navigation and ARIA support.
   */
  id: PropTypes.string,
  /**
   * This label appears above the field.
   */
  label: PropTypes.string,
  /**
   * This label appears beyond the field.
   */
  sublabel: PropTypes.string,
};

export const defaultProps = {
  elementName: 'default',
};
