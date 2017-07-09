import React from "react";
import ReactDOM from "react-dom";
import Link from "../compenants/Link.js";

class SideBar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div id = "nav">
          <ul>
            <Link currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} iconName="fa fa-files-o" value="Applications"> </Link>
            <Link currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} iconName="fa fa-gift" value="Prizes"> </Link>
            <Link currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} iconName="fa fa-calendar" value="Schedule"> </Link>
            <Link currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} iconName="fa fa-university" value="Sponsors"> </Link>
            <Link currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} iconName="fa fa-users" value="Users"> </Link>
          </ul>
        </div>
      );
    }
}

export default SideBar;
