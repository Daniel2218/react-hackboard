import React from 'react';
import ReactDOM from "reactdom";

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = this.props.className;
    const iconName      = this.props.iconName;
    const value         = this.props.value;
    const extraIcon     = this.props.extraIcon;

    return (
      <div class="dropdown div-size-1">
        <Link className=className
              iconName =iconName
              value    =value
              extraIcon=extraIcon>
        </Link>
    </div>
    );
  }
}
