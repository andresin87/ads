import React, { PureComponent } from 'react';
import { createPopper } from '@popperjs/core';
import withPropTypes from '../../../utils/withPropTypes';
import { defaultProps, propTypes } from '../Popover.props';

class Popper extends PureComponent {
  content = null;
  arrow = null;
  popper = null;

  componentDidMount() {
    this.initPopper();
  }

  componentDidUpdate() {
    this.updatePopper();
  }

  componentWillUnmount() {
    this.destroyPopper();
  }

  initPopper = () => {
    const { target, placement } = this.props;
    const { content, arrow } = this;
    console.log({ target, content });
    this.popper = createPopper(target, content, {
      placement: placement,
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrow,
          },
        },
      ],
    });
  };

  updatePopper = () => {
    this.popper && this.popper.update();
  };

  destroyPopper = () => {
    this.popper && this.popper.destroy();
  };

  setContentNode = node => {
    this.content = node;
  };

  setArrowNode = node => {
    this.arrow = node;
  };

  render() {
    const { placement, children } = this.props;

    return (
      <div ref={this.setContentNode} className={`popover bs-popover-${placement}`} role="tooltip">
        <div ref={this.setArrowNode} className="arrow" />
        <div className="popover-body">{children}</div>
      </div>
    );
  }
}

export default withPropTypes({
  propTypes,
  defaultProps,
})(Popper);
