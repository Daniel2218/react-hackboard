import React from "react";
import ReactDOM from "react-dom";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="tableHeader">
        <span> <i class="fa fa-th" aria-hidden="true"></i></span>
        <h5> {this.props.name} </h5>
        {this.props.children}
      </div>
    );
  }
}

export default TableHeader;
