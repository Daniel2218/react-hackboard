import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader.js';
import Modal from "./Modal.js";

class Table extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rows: this.getRows()
    };
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

  getData() {
    return [{
      firstName: "Daniel",
      lastName: "Lucia",
      email: "14dvl@queensu.ca",
      phone: "416-616-6498"
    }];
  }

  getRows() {
    return this.getData().map((row) =>
      <tr className="tr-color">{this.getFormattedRow(row)}</tr>
    );
  }

  getFormattedRow(row) {
    var formatedRow = [];
    for (var key in row) {
        formatedRow.push(<td>{row[key]}</td>);
    }
    return formatedRow;
  }

  addRow(rowInfo) {
    this.state.rows.push(<tr className="tr-color">{this.getFormattedRow(rowInfo)}</tr>);
  }

  render() {
    const page = this.props.page;
    const toggleModal = this.props.toggleModal;
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
            {/* {this.state.rows} */}
            <tr className="tr-color">
                <td>Daniel</td>
                <td>Lucia</td>
                <td>14dvl@queensu.ca</td>
                <td>Lucia</td>
                <td>14dvl@queensu.ca</td>
            </tr>
          </tbody>
        </table>
        {this.props.show && <Modal tableHeaders={this.getTableHeaders()} onToggleModal={toggleModal}/>}
      </div>
    );
  }
}

export default Table;
