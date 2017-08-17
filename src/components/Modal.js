import React from "react";
import ReactDOM from "react-dom";
import styles from "../css/popUpBox.css";
// import styles from "../css/modal.scss";

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
    this.props.clearInputFields();
  }

  // calls approiate functions on key presses
  handleKeyPress = (event) => {
    console.log(event.key);

    if(event.key === 'Escape'){
      console.log("toggle");
      this.props.clearInputFields();
      // does not seemed to work when autoFocus in input
      this.closeModal();
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
    this.props.clearEmptyInputs();
    this.props.onToggleModal();
  }

  render() {
    const tableHeaders = this.props.tableHeaders;
    const emptyInputs  = this.props.emptyInputs;
    const clickedRow   = this.props.clickedRow;

    var page = this.props.page;
    var headers = [];
    var th = "";
    var classes = styles.popUpInput;
    var clickedRowVal = "";
    var buttonText = (Object.keys(clickedRow).length === 0 ? "Add " : "Edit ") + page;

    page = page.substring(0, page.length - 1);
``
    for(var i = 0; i < tableHeaders.length; i++) {
      th = tableHeaders[i];
      classes += emptyInputs.indexOf(th) !== -1 ? " " + styles.redBorder : "";
      clickedRowVal = clickedRow[i] === undefined ? "" : clickedRow[i];

      headers.push(
        <div>
          <p> Enter {th}: </p>
           <input defaultValue={clickedRowVal} ref={th} name={th} onKeyDown={this.handleKeyPress}
                  className={classes} type='text' autoFocus={i === 0} />
        </div>
      );

      classes = styles.popUpInput;
    }

    return (
      <div>
        <div id={styles.popUpBox} tabIndex="1" onKeyDown={this.handleKeyPress}>
            <div id={styles.top}>
                <p id={styles.makeInline}> Add a new {page}</p>
                <i onClick={this.closeModal} id={styles.floatRight} className="fa fa-times fa-lg" aria-hidden="true"></i>
            </div>
            <div id={styles.middle}>
              <div>
                { headers }
              </div>
            </div>
            <div id={styles.bottom}>
                <div id={styles.positionLeft}>
                    <a className={styles.popUpa} id={styles.addEventbtn}
                       onClick={() => { this.handleButtonClick(buttonText) }} href="#">
                        {buttonText}
                    </a>
                    <a className={styles.popUpa} id={styles.cancelbtn} onClick={this.closeModal} href="#"> Cancel </a>
                </div>
            </div>
        </div>
        <div id={styles.screen} onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default Modal;
