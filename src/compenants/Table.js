import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <table>
        <th>{this.props.header[0]}</th>;
        <th>{this.props.header[1]}</th>;
        <th>{this.props.header[2]}</th>;

        <tr class="tr-color">
            <td contenteditable><a href="#">Daniel</a></td>
            <td contenteditable><a href="#">Lucia</a></td>
            <td contenteditable><a href="#">14dvl@queensu.ca</a></td>
        </tr>
      </table>
    );
  }
}
