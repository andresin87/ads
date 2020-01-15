import React, { PureComponent, createRef } from 'react';
import { theme1, theme2 } from './themes';

class Theme extends PureComponent {
  node = createRef();
  componentDidMount() {
    this.updateCSSVariables();
  }

  componentDidUpdate(prevProps) {
    if (this.props.variables !== prevProps.variables) {
      this.updateCSSVariables();
    }
  }

  updateCSSVariables() {
    Object.entries(this.props.variables).forEach(([prop, value]) => this.node.current.style.setProperty(prop, value));
  }

  render() {
    const { children } = this.props;
    return <div ref={this.node}>{children}</div>;
  }
}

Theme.themes = { theme1, theme2 };

export default Theme;
