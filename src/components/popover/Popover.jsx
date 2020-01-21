import React, { Component, useEffect } from 'react';
import Target from './target/Target';
import Content from './content/Content';
import { Provider, Consumer } from './context';
import withPropTypes from '../../utils/withPropTypes';
import { defaultProps, propTypes } from './Popover.props';

class Popover extends Component {
  static Target = Target;
  static Content = Content;

  state = {
    placement: this.props.placement,
    showPopover: false,
    targetNode: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.placement !== prevState.placement) {
      return { placement: nextProps.placement };
    }

    return null;
  }

  setTargetNode = node => {
    debugger;
    this.setState({ targetNode: node });
  };

  showPopover = () => this.setState({ showPopover: true });

  hidePopover = () => this.setState({ showPopover: false });

  render() {
    const context = {
      showPopover: this.state.showPopover,
      placement: this.state.placement,
      targetNode: this.state.targetNode,
      setTargetNode: this.setTargetNode,
      onMouseEnterOnTarget: this.showPopover,
      onMouseLeaveFromTarget: this.hidePopover,
    };
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export default withPropTypes({
  propTypes,
  defaultProps,
})(Popover);
