import React from "react";
import ReactDOM from "react-dom";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div id="tableHeader">
        <span> <i class="fa fa-th" aria-hidden="true"></i></span>
        <h5> {this.props.pageName} </h5>
        {this.props.children}
    </div>
  }
}
