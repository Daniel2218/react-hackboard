import React, { Component } from 'react';
import NavBar from "../compenants/NavBar.js";
import SideBar from "../compenants/SideBar.js";
import TableHeader from "../compenants/TableHeader.js";
import Table from "../compenants/Table.js";

import './App.css';
import '../css/reset.css';
import '../css/navStyle.css';
import '../css/application.css';

class App extends Component {
  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      pageName: "Applications",
      tableHeaders: ["First Name", "Last Name", "Phone", "Hacks", "App"]
    };
  }

  handlePageChange(pageName) {
    this.setState({pageName: pageName});
  }

  render() {
    return (
      <div>
          <NavBar />
          <SideBar onPageChange={this.handlePageChange}/>
          <div className="tableSection">
            <div id="title">
                <h1> {this.state.pageName} </h1>
            </div>
            <hr></hr>
            <TableHeader name={this.state.pageName} />
            <Table header={this.state.tableHeaders}/>
          </div>
          <footer id="footer">
            <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
          </footer>
      </div>
    );
  }
}

export default App;
