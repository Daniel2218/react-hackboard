import React from "react";
import ReactDOM from "react-dom";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.onButtonClick();
  }

  createAddButton() {
    var currentPage = this.props.currentPage;
    var buttonName = currentPage.substring(0, currentPage.length - 1);
    var buttonStyle = currentPage.length > 6 ? {width: "125px"} : {};

    return {
        name: "Add new " + buttonName,
        iconName: "fa fa-plus",
        handleClick: this.handleButtonClick,
        style: buttonStyle
    };
  }

  getButtons(currentPage) {
    var buttons = [];

    if (currentPage === "Prizes" || currentPage === "Sponsors" || currentPage === "Users") {
        buttons.push(this.createAddButton());
    }
    return buttons;
  }

  render() {
    const currentPage = this.props.currentPage;
    // console.log(this.getButtons(currentPage).forEach());
    const listOfButtons = this.getButtons(currentPage).map((buttonInfo) =>
      <button onClick={buttonInfo.handleClick} style={buttonInfo.style}>
            <i className={buttonInfo.iconName} aria-hidden='true'></i>
            {buttonInfo.name}
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
