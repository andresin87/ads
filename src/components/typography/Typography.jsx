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
    htmlElement: htmlElement ? htmlElement : typeName,
    ...props,
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
Typography.Big = Typography.createType('big');
Typography.Em = Typography.createType('em');
Typography.H1 = Typography.createType('title1', 'h1');
Typography.H2 = Typography.createType('title2', 'h2');
Typography.H3 = Typography.createType('title3', 'h3');
Typography.H4 = Typography.createType('title4', 'h4');
Typography.Label = Typography.createType('label');
Typography.Sup = Typography.createType('sup');
Typography.Sub = Typography.createType('sub');
Typography.U = Typography.createType('u');
Typography.P = Typography.createType('p');
Typography.S = Typography.createType('s');
Typography.Small = Typography.createType('small');
Typography.Q = Typography.createType('q');

export default withPropTypes({
  propTypes,
  defaultProps,
})(Typography);
