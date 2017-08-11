import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader.js';
import Modal from "./Modal.js";

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.addRow = this.addRow.bind(this);
    this.editRow = this.editRow.bind(this);
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
          onClick={this.getClickedRow.bind(this, row)}
          onMouseOver={this.mouseOver.bind(this,row)}
          onMouseOut={this.mouseOut}>
        {this.getFormattedRow(row)}
      </tr>
    );
  }

  getFormattedRow(row) {
    var page = this.props.page;
    var formatedRow = [];
    var len = Object.keys(row).length;
    var i = 0;
    const icon = (<i onClick='' className="fa fa-trash" aria-hidden="true"></i>);
    var entry = "";
    var sel   = {};

    for (var key in row) {
      if(row.hasOwnProperty(key)) {
        entry = (<td> {row[key]} </td>);
        sel = row.id === this.state.selectedRow ? { opacity: "1" } : { opacity: "0" };
        if(++i === len ){
          entry = (
            <td>
              {row[key]}
              {page !== "Applications" &&<i style={sel}className="fa fa-trash" aria-hidden="true"></i>}
            </td>
          );
        }

        formatedRow.push(entry);
      }
    }
    return formatedRow;
  }

  addRow(rowInfo) {
    this.props.onAddRow(this.props.page, rowInfo);
  }

  editRow(rowInfo) {
    this.props.onEditRow(this.props.page, rowInfo);
  }

  mouseOver(row) {
    console.log(row.id);
    this.setState({selectedRow: row.id});
  }

  mouseOut() {
    this.setState({selectedRow: ""});
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
                                         clickedRow={this.clickedRow}
                                         page={page}
                                         clearInputFields={this.clearClickRow}/>}
      </div>
    );
  }
}

export default Table;
