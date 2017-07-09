import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>{this.props.header[0]}</th>;
            <th>{this.props.header[1]}</th>;
            <th>{this.props.header[2]}</th>;
            <th>{this.props.header[3]}</th>;
            <th>{this.props.header[4]}</th>;
          </tr>
          <tr className="tr-color">
              <td><a href="#"> Daniel </a></td>
              <td><a href="#"> Lucia </a></td>
              <td><a href="#"> 14dvl@queensu.ca </a></td>
              <td><a href="#"> Lucia </a></td>
              <td><a href="#"> 14dvl@queensu.ca </a></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
