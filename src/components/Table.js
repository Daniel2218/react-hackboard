import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader.js';
import Modal from "./Modal.js";

class Table extends React.Component {
  constructor(props){
    super(props);
    this.addRow = this.addRow.bind(this);
    this.clearClickRow = this.clearClickRow.bind(this);
    this.clickedRow = {};
  }

  getTableHeaders() {
    var page = this.props.page;
    var th = [];

    if(page === "Applications") {
      th = ["Applicant ID","First Name","Last Name","Hacks","Status"];
    } else if (page === "Prizes") {
      th = ["Name","Description","Obtained By","Donated By"];
    } else if (page === "Sponsors") {
      th = ["Name","Email","Phone","Donation Amount","Donation Recieved"];
    } else if (page === "Users") {
      th = ["Name","Email","Phone","Postion"];
    }
    return th;
  }

  getClickedRow = (row) => {
    if(this.props.page !== "Applications") {
      var rowVals = Object.keys(row).map(key => {
        return row[key];
      });

      this.clickedRow = rowVals;
      this.props.onToggleModal();
    }
  }

  clearClickRow = () => {
    this.clickedRow = {};
  }

  getRows() {
    const page = this.props.page;
    const toggleModal = this.props.onToggleModal;
    const rows = this.props.table[page].rows === undefined ? [] : this.props.table[page].rows;

    return rows.map((row) =>
      <tr className="tr-color"
          onClick={this.getClickedRow.bind(this, row)}>
        {this.getFormattedRow(row)}
      </tr>
    );
  }

  getFormattedRow(row) {
    var formatedRow = [];

    for (var key in row) {
      if(row.hasOwnProperty(key)) {
        formatedRow.push(<td>{row[key]}</td>);
      }
    }
    return formatedRow;
  }

  addRow(rowInfo) {
    this.props.onAddRow(this.props.page, rowInfo);
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
                                         emptyInputs={emptyInputs}
                                         clickedRow={this.clickedRow}
                                         page={page}
                                         clearInputFields={this.clearClickRow}/>}
      </div>
    );
  }
}

export default Table;
