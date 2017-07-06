import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const extraIcon = this.props.extraIcon === undefined ? false : this.props.extraIcon;
    const className = this.props.className === undefined ? "" : this.props.className;
    
    return (
      <li class={this.props.className}>
        <a href={this.props.href}>
          <i class={this.props.iconName} aria-hidden='true'></i>
          <span>{this.props.value}</span>
          {extraIcon && <i class={this.props.extraIcon} aria-hidden='true'></i>}
        </a>
      </li>
    );
  }
}
