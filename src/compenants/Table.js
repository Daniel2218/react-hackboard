import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const listOfHeaders = this.props.headers.map((header) =>
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
