import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onPageChange(this.props.value);
  }

  render() {
    const extraIcon = this.props.extraIcon === undefined ? false : this.props.extraIcon;
    const className = this.props.className;

    return (
      <li onClick={this.handleClick} className={className}>
        <i className={this.props.iconName} aria-hidden='true'></i>
        <span>{this.props.value}</span>
        {extraIcon && <i className={this.props.extraIcon} aria-hidden='true'></i>}
      </li>
    );
  }
}

export default Link;
