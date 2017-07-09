import React from "react";
import ReactDOM from "react-dom";

class PathHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id ="pathheader">
          <a href="#" id="spn-grey">
               <i className="fa fa-home" id="i-space-1" aria-hidden="true"></i> Home
           </a>
           {this.props.children}
        </div>
    );
  }
}

export default PathHeader;
