import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(){
    this.props.onPageChange(this.props.value);
  }

  render() {
    const extraIcon = this.props.extraIcon === undefined ? false : this.props.extraIcon;
    const className = this.props.className === undefined ? "" : this.props.className;

    return (
      <li onClick={this.handleClick} class={this.props.className}>
        <i class={this.props.iconName} aria-hidden='true'></i>
        <span>{this.props.value}</span>
        {extraIcon && <i class={this.props.extraIcon} aria-hidden='true'></i>}
      </li>
    );
  }
}
