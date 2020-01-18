import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * Class names to be added to the outer container of the input.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  /**
   * This is the initial value of an uncontrolled form element.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
   * The `<Input>` element includes support for all HTML5 types.
   */
  type: PropTypes.oneOf([
    'text',
    'password',
    'datetime',
    'datetime-local',
    'date',
    'month',
    'time',
    'week',
    'number',
    'email',
    'url',
    'search',
    'tel',
    'color',
  ]),
  /**
   * The input is a controlled component, and will always display this value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const defaultProps = {
  name: '',
};
