import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader.js';
import Modal from "./Modal.js";

class Table extends React.Component {
  constructor(props){
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    };
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }));
  }

  getTableHeaders() {
    var currentPage = this.props.currentPage;
    var th = [];

    if(currentPage === "Applications") {
      th = ["Applicant ID","First Name","Last Name","Hacks","Status"];
    } else if (currentPage === "Prizes") {
      th = ["Name","Description","Obtained By","Donated By"];
    } else if (currentPage === "Sponsors") {
      th = ["Name","Email","Phone","Donation Amount","Donation Recieved"];
    } else if (currentPage === "Users") {
      th = ["Name","Email","Phone","Postion"];
    }
    return th;
  }

  render() {
    const currentPage = this.props.currentPage;
    const listOfHeaders = this.getTableHeaders().map((header) =>
      <th>{header}</th>
    );

    return (
      <div>
        <TableHeader currentPage={this.props.currentPage}
                     onButtonClick={this.toggleModal} />
        <table>
          <tbody>
            <tr>{listOfHeaders}</tr>
            <tr className="tr-color">
                <td>Daniel</td>
                <td>Lucia</td>
                <td>14dvl@queensu.ca</td>
                <td>Lucia</td>
                <td>14dvl@queensu.ca</td>
            </tr>
          </tbody>
        </table>
        {this.state.showModal && <Modal tableHeaders={this.getTableHeaders()} toggleModal={this.toggleModal}/>}
      </div>
    );
  }
}

export default Table;
