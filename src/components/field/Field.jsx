import React, { cloneElement } from 'react';
import cx from 'classnames';

import { SUIT_PREFIX } from '../../constants';
import Typography from '../typography/Typography';
import SUIT from '../../utils/SUIT';
import withPropTypes from '../../utils/withPropTypes';
import { defaultProps, propTypes } from './Field.props';

import './style.scss';

const Field = ({
  className,
  disabled,
  elementName,
  id,
  label,
  name,
  tone,
  sublabel,
  children,
  ...otherProps
}) => (
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
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Field',
            modifierName: tone,
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
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: elementName,
            modifierName: tone,
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
      tone={tone}
      className={cx([
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: 'Field',
          descendentName: 'label',
        }),
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Field',
            descendentName: 'label',
            modifierName: tone,
          }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
          descendentName: 'label',
        }),
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: elementName,
            descendentName: 'label',
            modifierName: tone,
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
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Field',
            descendentName: 'element',
            modifierName: tone,
          }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
          descendentName: 'element',
        }),
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: elementName,
            descendentName: 'element',
            modifierName: tone,
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
      tone={tone}
      className={cx([
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: 'Field',
          descendentName: 'subLabel',
        }),
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Field',
            descendentName: 'subLabel',
            modifierName: tone,
          }),
        SUIT.createComponentName({
          namespace: SUIT_PREFIX,
          componentName: elementName,
          descendentName: 'subLabel',
        }),
        tone !== undefined &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: elementName,
            descendentName: 'subLabel',
            modifierName: tone,
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
