import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const currentPage = this.props.currentPage;
    const listOfHeaders = this.props.tableHeaders.map((header) =>
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
