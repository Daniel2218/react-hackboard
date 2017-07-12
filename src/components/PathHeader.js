import React from "react";
import ReactDOM from "react-dom";

class PathHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id ="pathheader">
          <div id="spn-grey">
            <i className="fa fa-home" id="i-space-1" aria-hidden="true"></i> Home
              <i className="fa fa-angle-right" id ="i-space-2" aria-hidden="true"></i>
              {this.props.currentPage}
          </div>
        </div>
    );
  }
}

export default PathHeader;
