import React from "react";
import ReactDOM from "react-dom";

import '../css/popUpBox.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getRowFromModal = this.getRowFromModal.bind(this);
  }

  getRowFromModal() {
    var obj = {};

    for(var key in this.refs) {
      if(this.refs.hasOwnProperty(key)) {
        obj[key] = this.refs[key].value;
      }
    }

    return obj;
  }

  componentDidMount() {
    this.row = this.getRowFromModal();
  }

  handleButtonClick(buttonText) {
    if(buttonText.indexOf("Add") !== -1) {
      this.handleAddRow();
    } else if(buttonText.indexOf("Edit") !== -1) {
      this.handleEditRow();
    } else {
      this.closeModal();
    }
  }

  // calls approiate functions on key presses
  handleKeyPress = (event) => {
    console.log(event.key);

    if(event.key === 'Escape'){
      console.log("toggle");
      this.props.clearInputFields();
      this.closeModal(); // does not seemed to work when autoFocus in input
    } else if(event.key === "Enter") {
      this.handleAddRow();
      this.closeModal();
    }
  }

  handleAddRow() {
    this.props.onAddRow(this.getRowFromModal());
  }

  handleEditRow() {
    this.props.onEditRow(this.getRowFromModal());
  }

  closeModal() {
    this.props.clearInputFields();
    this.props.onToggleModal();
  }

  render() {
    const tableHeaders = this.props.tableHeaders;
    const emptyInputs  = this.props.emptyInputs;
    const clickedRow   = this.props.clickedRow;

    var page = this.props.page;
    var headers = [];
    var th = "";
    var classes = "pop-up-input";
    var clickedRowVal = "";
    var buttonText = (Object.keys(clickedRow).length === 0 ? "Add " : "Edit ") + page;

    page = page.substring(0, page.length - 1);
``
    for(var i = 0; i < tableHeaders.length; i++) {
      th = tableHeaders[i];
      classes += emptyInputs.indexOf(th) !== -1 ? " redBorder" : "";
      clickedRowVal = clickedRow[i] === undefined ? "" : clickedRow[i];

      headers.push(
        <div>
          <p> Enter {th}: </p>
           <input defaultValue={clickedRowVal} ref={th} name={th} onKeyDown={this.handleKeyPress}
                  className={classes} type='text' autoFocus={i === 0} />
        </div>
      );

      classes = "pop-up-input";
    }

    return (
      <div>
        <div id ="pop-up-box" tabIndex="1" onKeyDown={this.handleKeyPress}>
            <div id="top">
                <p id="makeInline"> Add a new {page}</p>
                <i onClick={this.closeModal} id="floatRight" className="fa fa-times fa-lg" aria-hidden="true"></i>
            </div>
            <div id="middle">
              <div>
                { headers }
              </div>
            </div>
            <div id="bottom">
                <div id="positionLeft">
                    <a className="pop-up-a" id="add-event-btn"
                       onClick={() => { this.handleButtonClick(buttonText) }} href="#">
                        {buttonText}
                    </a>
                    <a className="pop-up-a" id="cancel-btn" onClick={this.closeModal} href="#"> Cancel </a>
                </div>
            </div>
        </div>
        <div id ="screen" onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default Modal;
