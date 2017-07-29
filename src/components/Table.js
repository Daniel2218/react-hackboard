import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader.js';
import Modal from "./Modal.js";

class Table extends React.Component {
  constructor(props){
    super(props);
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

  getRows() {
    const page = this.props.page;
    const rows = this.props.table[page].rows === undefined ? [] : this.props.table[page].rows;

    return rows.map((row) =>
      <tr className="tr-color">{this.getFormattedRow(row)}</tr>
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
    this.props.addRow(rowInfo);
  }

  render() {
    const page = this.props.page;
    const toggleModal = this.props.onToggleModal;
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
        {this.props.modalShow && <Modal tableHeaders={this.getTableHeaders()} onToggleModal={toggleModal}/>}
      </div>
    );
  }
}

export default Table;
