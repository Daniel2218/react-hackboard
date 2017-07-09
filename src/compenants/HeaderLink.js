import React from 'react';
import ReactDOM from "react-dom";
import Link from "./Link.js";

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = this.props.className;
    const iconName  = this.props.iconName;
    const value     = this.props.value;
    const extraIcon = this.props.extraIcon;

    return (
      <div className="dropdown div-size-1">
        <Link className={className}
              iconName ={iconName}
              value    ={value}
              extraIcon={extraIcon}>
        </Link>
    </div>
    );
  }
}

export default HeaderLink;
