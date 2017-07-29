import React from "react";
import ReactDOM from "react-dom";

import '../css/popUpBox.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddRow = this.handleAddRow.bind(this);
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

  handleKeyPress = (event) => {
    console.log(event.key);
    this.row = this.getRowFromModal();

    if(event.key === 'Escape'){
      console.log("toggle");
      this.props.onToggleModal(); // does not seemed to work when autoFocus in input
    } else if(event.key === "Enter") {
      this.handleAddRow();
    }
  }

  handleAddRow() {
    this.props.onAddRow(this.row);
  }

  render() {
    const tableHeaders = this.props.tableHeaders;
    const toggleModal = this.props.onToggleModal;
    const emptyInputs = this.props.emptyInputs;
    var headers = [];
    var th = "";
    var classes = "pop-up-input";

    for(var i = 0; i < tableHeaders.length; i++) {
      th = tableHeaders[i];
      classes += emptyInputs.indexOf(th) !== -1 ? " redBorder" : "";

      headers.push(
        <div>
          <p> Enter {tableHeaders[i]}: </p>
          {i === 0 && <input ref={th} name={th} onKeyDown={this.handleKeyPress} className={classes} type='text' autoFocus />}
          {i > 0   && <input ref={th} name={th} onKeyDown={this.handleKeyPress} className={classes} type='text' />}
        </div>
      );
    }

    return (
      <div>
        <div id ="pop-up-box" tabIndex="1" onKeyDown={this.handleKeyPress}>
            <div id="top">
                <p id="makeInline"> Add a new {this.props.buttonName}</p>
                <i onClick={toggleModal} id="floatRight" className="fa fa-times fa-lg" aria-hidden="true"></i>
            </div>
            <div id="middle">
              <div>
                { headers }
              </div>
            </div>
            <div id="bottom">
                <div id="positionLeft">
                    <a className="pop-up-a" id="add-event-btn" onClick={this.handleAddRow} href="#">
                        Add {this.props.buttonName}
                    </a>
                    <a className="pop-up-a" id="cancel-btn" onClick={toggleModal} href="#"> Cancel </a>
                </div>
            </div>
        </div>
        <div id ="screen" onClick={toggleModal}></div>
      </div>
    );
  }
}

export default Modal;
