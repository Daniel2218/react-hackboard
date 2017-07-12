import React from "react";
import ReactDOM from "react-dom";
import Link from "./Link.js";

class Dropdown extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const divClassName = this.props.divClassName;
    const className    = this.props.className;
    const iconName     = this.props.iconName;
    const value        = this.props.value;
    const extraIcon    = this.props.extraIcon;
  
    return (
      <div className={divClassName}>
        <Link className={className}
              iconName ={iconName}
              value    ={value}
              extraIcon={extraIcon}>
        </Link>
        <div className="dropdown-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
