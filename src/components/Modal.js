import React from "react";
import ReactDOM from "react-dom";

import '../css/popUpBox.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress = (event) => {
    console.log(event.key);

    if(event.key === 'Escape'){
      console.log("toggle");
      this.props.toggleModal(); // does not seemed to work when autoFocus in input
    } else if(event.key === "Enter") {

    }
  }

  render() {
    const tableHeaders = this.props.tableHeaders;
    const toggleModal = this.props.onToggleModal;
    var headers = [];

    for(var i = 0; i < tableHeaders.length; i++) {
      headers.push(
        <div>
          <p> Enter {tableHeaders[i]}: </p>
          {i === 0 && <input autoFocus name={tableHeaders[i]} onKeyDown={this.handleKeyPress} className='pop-up-input' type='text'/>}
          {i > 0   && <input name={tableHeaders[i]} onKeyDown={this.handleKeyPress} className='pop-up-input' type='text'/>}
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
                    <a className="pop-up-a" id="add-event-btn" onClick={this.addEvent} href="#">
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
