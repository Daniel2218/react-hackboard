import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader.js';
import Modal from "./Modal.js";

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = { deleteRow: false };
    this.addRow = this.addRow.bind(this);
    this.editRow = this.editRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.clearClickRow = this.clearClickRow.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.clickedRow = {};
  }

  getTableHeaders() {
    var page = this.props.page;
    var th = [];

    if(page === "Applications") {
      th = ["Applicant ID","First Name","Last Name","Hacks","Status"];
    } else if (page === "Prizes") {
      th = ["Prize ID", "Name","Description","Obtained By","Donated By"];
    } else if (page === "Sponsors") {
      th = ["Sponsors ID", "Name","Email","Phone","Donation Amount","Donation Recieved"];
    } else if (page === "Users") {
      th = ["Users ID", "Name","Email","Phone","Postion"];
    }
    return th;
  }

  getRows() {
    const page = this.props.page;
    const toggleModal = this.props.onToggleModal;
    const rows = this.props.table[page].rows === undefined ? [] : this.props.table[page].rows;

    return rows.map((row) =>
      <tr className="tr-color"
          onClick={this.getClickedRow.bind(this, row)}
          onMouseOver={this.mouseOver.bind(this,row)}
          onMouseOut={this.mouseOut}>
        {this.getFormattedRow(row)}
      </tr>
    );
  }

  getFormattedRow(row) {
    var formatedRow = [];
    var i = 0;
    var entry = "";
    var sel   = {};
    const page = this.props.page;
    const icon = (<i onClick='' className="fa fa-trash" aria-hidden="true"></i>);
    const len = Object.keys(row).length;

    for (var key in row) {
      if(row.hasOwnProperty(key)) {
        entry = (<td> {row[key]} </td>);
        sel = row.id === this.state.selectedRow ? { opacity: "1" } : { opacity: "0" };
        if(++i === len ){
          entry = (
            <td>
              {row[key]}
              {page !== "Applications" && <i style={sel} className="fa fa-trash" aria-hidden="true"
                                             onClick={(event) => {this.deleteRow(event, row.id)} }>
                                         </i>}
            </td>
          );
        }

        formatedRow.push(entry);
      }
    }
    return formatedRow;
  }

  getClickedRow = (row) => {
    if(!this.state.deleteRow) {
      if(this.props.page !== "Applications") {
        var rowVals = Object.keys(row).map(key => {
          return row[key];
        });

        this.clickedRow = rowVals;
        this.props.onToggleModal();
      }
    }
  }

  clearClickRow = () => {
    this.clickedRow = {};
  }

  addRow(rowInfo) {
    this.props.onAddRow(this.props.page, rowInfo);
  }

  editRow(rowInfo) {
    this.props.onEditRow(this.props.page, rowInfo);
  }

  deleteRow(event,id) {
    // stops getClickedRow from being called
    event.stopPropagation();
    this.props.onDeleteRow(this.props.page, id);
  }

  mouseOver(row) {
    this.setState(Object.assign({}, this.state, {selectedRow: row.id}));
  }

  mouseOut() {
    this.setState(Object.assign({}, this.state, {selectedRow: ""}));
  }

  render() {
    const page = this.props.page;
    const toggleModal = this.props.onToggleModal;
    const emptyInputs = this.props.modal.emptyInputs;
    const listOfHeaders = this.getTableHeaders().map((header) =>
      <th>{header}</th>
    );

    return (
      <div>
        <TableHeader page={page}
                     onToggleModal={toggleModal} />
        <table>
          <tbody>
            <tr>{listOfHeaders}</tr>
            {this.getRows()}
          </tbody>
        </table>
        {this.props.modal.show && <Modal tableHeaders={this.getTableHeaders()}
                                         onToggleModal={toggleModal}
                                         onAddRow={this.addRow}
                                         onEditRow={this.editRow}
                                         emptyInputs={emptyInputs}
                                         clearEmptyInputs={this.props.onClearEmptyInputs}
                                         clickedRow={this.clickedRow}
                                         page={page}
                                         clearInputFields={this.clearClickRow}/>}
      </div>
    );
  }
}

export default Table;
