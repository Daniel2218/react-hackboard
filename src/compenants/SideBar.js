import React from "react";
import ReactDOM from "react-dom";

class SideBar extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div id = "nav">
          <ul>
            <Link onPageChange={this.props.onPageChange} iconName="fa fa-files-o" value="Applications"> </Link>
            <Link onPageChange={this.props.onPageChange} iconName="fa fa-gift" value="Prizes"> </Link>
            <Link onPageChange={this.props.onPageChange} iconName="fa fa-calender" value="Schedule"> </Link>
            <Link onPageChange={this.props.onPageChange} iconName="fa fa-university" value="Sponsors"> </Link>
            <Link onPageChange={this.props.onPageChange} iconName="fa fa-users" value="Users"> </Link>
          </ul>
        </div>
      );
    }
}
