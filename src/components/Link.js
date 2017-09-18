import React from 'react';
import ReactDOM from 'react-dom';

import styles from "../css/link.css";

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
    const page = this.props.page;
    var id = page === this.props.value ? styles.makeVisted : "";

    return (
      <li id={id} onClick={this.handleClick} className={styles.li + " " + className}>
        <div>
          <i className={this.props.iconName} aria-hidden='true'></i>
          <span>{this.props.value}</span>
          {extraIcon && <i className={this.props.extraIcon} aria-hidden='true'></i>}
        </div>
      </li>
    );
  }
}

export default Link;
