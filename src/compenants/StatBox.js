import React from "react";
import ReactDOM from "react-dom";

class StatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const iconClass = this.props.iconClass + " fa-2x";

    return (
      <div id={this.props.id} className="hvr-grow statBox">
          <i className={iconClass} aria-hidden="true"></i>
          Total: {this.props.value}
      </div>
    );
  }
}

export defualt StatBox;
