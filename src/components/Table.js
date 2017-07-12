import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  getTableHeaders(currentPage) {
    var th = [];

    if(currentPage === "Applications") {
      th = ["Applicant ID","First Name","Last Name","Hacks","Status"];
    } else if (currentPage === "Prizes") {
      th = ["ID","First Name","Description","Obtained By","Donated By"];
    } else if (currentPage === "Sponsors") {
      th = ["ID","First Name","Last Name","Email","Phone","Donation Amount","Donation Recieved"];
    } else if (currentPage === "Users") {
      th = ["ID","First Name","Last Name","Email","Phone","Postion"];
    }
    return th;
  }

  render() {
    const currentPage = this.props.currentPage;
    const listOfHeaders = this.getTableHeaders(currentPage).map((header) =>
      <th>{header}</th>
    );

    return (
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
    );
  }
}

export default Table;
