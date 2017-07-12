import React from "react";
import ReactDOM from "react-dom";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getButtons(currentPage) {
    var buttons = [];

    if(currentPage === "Applications") {
      buttons = ["Sort by hacks"];
    } else if (currentPage === "Prizes") {
      buttons = ["Add new prize"];
    } else if (currentPage === "Sponsors") {
      buttons = ["Add new sponsors"];
    } else if (currentPage === "Users") {
      buttons = ["Add new user"];
    }
    return buttons;
  }

  render() {
    const currentPage = this.props.currentPage;
    const listOfButtons = this.getButtons(currentPage).map((buttonName) =>
      <button onClick="">
            <i className={this.props.iconName} aria-hidden='true'></i> {buttonName}
      </button>
    );

    return (
      <div id="tableHeader">
        <span> <i className="fa fa-th" aria-hidden="true"></i></span>
        <h5> {currentPage} </h5>
        {listOfButtons}
      </div>
    );
  }
}

export default TableHeader;
