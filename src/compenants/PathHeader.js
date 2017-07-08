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
               <i class="fa fa-home" id="i-space-1" aria-hidden="true"></i> Home
           </a>
           {props.children}
        </div>
    );
  }
}
