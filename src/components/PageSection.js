import React from "react";
import ReactDOM from "react-dom";
import TableHeader from "./TableHeader.js";

class PageSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="tableSection">
        <div id="title">
            <h1> {this.props.currentPage} </h1>
        </div>
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}

export default PageSection;
