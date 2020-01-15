import React, { createElement } from 'react';
import cx from 'classnames';

import { propTypes, defaultProps } from './Typography.props';

import withPropTypes from '../../utils/withPropTypes';
import SUIT from '../../utils/SUIT';
import { SUIT_PREFIX } from '../../constants';

const Typography = ({ className, children, htmlElement, tone, disabled, ...props }) =>
  createElement(
    typeof htmlElement === 'string' && htmlElement !== '' ? htmlElement : 'span',
    {
      ...{
        ...props,
        className: cx([
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Typography',
          }),
          tone !== undefined &&
            SUIT.createComponentName({
              namespace: SUIT_PREFIX,
              componentName: 'Typography',
              modifierName: tone,
            }),
          disabled === true &&
          SUIT.createComponentName({
            namespace: SUIT_PREFIX,
            componentName: 'Typography',
            componentState: 'disabled',
          }),
          className,
        ]),
      },
    },
    children,
  );

Typography.createType = (typeName, htmlElement) => ({ className, ...props }) =>
  createElement(Typography, {
    ...props,
    htmlElement: htmlElement ? htmlElement : typeName,
    className: cx([
      SUIT.createComponentName({
        namespace: SUIT_PREFIX,
        componentName: 'Typography',
        modifierName: typeName,
      }),
      className,
    ]),
  });

Typography.B = Typography.createType('b');
Typography.Label = Typography.createType('label');
Typography.Sup = Typography.createType('sup');
Typography.Sub = Typography.createType('sub');
Typography.U = Typography.createType('u');
Typography.P = Typography.createType('p');
Typography.Q = Typography.createType('q');

export default withPropTypes({
  propTypes,
  defaultProps,
})(Typography);
