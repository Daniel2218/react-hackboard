import React from "react";
import ReactDOM from "react-dom";

import styles from "../css/tableHeader.css";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.onToggleModal();
  }

  createAddButton() {
    var page = this.props.page;
    var buttonName = page.substring(0, page.length - 1);
    var buttonStyle = page.length > 6 ? {width: "125px"} : {};

    return {
        name: "Add new " + buttonName,
        iconName: "fa fa-plus",
        handleClick: this.handleButtonClick,
        style: buttonStyle
    };
  }

  getButtons(page) {
    var buttons = [];

    if (page === "Prizes" || page === "Sponsors" || page === "Users") {
        buttons.push(this.createAddButton());
    }
    return buttons;
  }

  render() {
    const page = this.props.page;
    const listOfButtons = this.getButtons(page).map((buttonInfo) =>
      <button className={styles.tableHeaderBtn} onClick={buttonInfo.handleClick} style={buttonInfo.style}>
            <i className={buttonInfo.iconName} aria-hidden='true'></i>
            {buttonInfo.name}
      </button>
    );

    return (
      <div id={styles.tableHeader}>
        <span> <i className="fa fa-th" aria-hidden="true"></i></span>
        <h5> {page} </h5>
        {listOfButtons}
      </div>
    );
  }
}

export default TableHeader;
