import React, { cloneElement } from 'react';
import cx from 'classnames';

import { SUIT_PREFIX } from '../../constants';
import Typography from '../typography/Typography';
import SUIT from '../../utils/SUIT';
import withPropTypes from '../../utils/withPropTypes';
import { defaultProps, propTypes } from './Field.props';

const Field = ({ className, disabled, elementName, id, label, name, sublabel, children, ...otherProps }) => (
  <div
    {...{
      className: cx([
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: 'Field',
        }),
        disabled === true &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Field',
            componentState: 'disabled',
          }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
        }),
        disabled === true &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: elementName,
            componentState: 'disabled',
          }),
      ]),
      disabled,
      elementName,
      id,
      label,
      sublabel,
    }}
  >
    <Typography.Label
      className={cx([
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: 'Field',
          descendentName: 'label',
        }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
          descendentName: 'label',
        }),
      ])}
      for={name}
    >
      {label}
    </Typography.Label>
    {cloneElement(children, {
      className: cx([
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: 'Field',
          descendentName: 'element',
        }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
          descendentName: 'element',
        }),
        className,
      ]),
      disabled,
      id,
      label,
      sublabel,
      ...otherProps,
    })}
    <Typography.Label
      className={cx([
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: 'Field',
          descendentName: 'subLabel',
        }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
          descendentName: 'subLabel',
        }),
      ])}
    >
      {sublabel}
    </Typography.Label>
  </div>
);

export default withPropTypes({
  propTypes,
  defaultProps,
})(Field);
