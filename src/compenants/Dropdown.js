import React from "react";
import ReactDOM from "reactdom";

class Dropdown extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const divClassName = "dropdown" + this.props.divClassName === undefined ? "";
    const className    = this.props.className;
    const href         = this.props.href;
    const iconName     = this.props.iconName;
    const value        = this.props.value;
    const extraIcon    = this.props.extraIcon;

    return (
      <div class=divClassName>
        <Link className=className
              href     =href
              iconName =iconName
              value    =value
              extraIcon=extraIcon>
        </Link>
        <div class="dropdown-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
