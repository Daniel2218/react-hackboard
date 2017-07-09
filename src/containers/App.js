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
      currentPage: "Applications",
      tableHeaders: ["FirstName", "LastName", "Phone", "Hacks", "App"]
    };
  }

  handlePageChange(currentPage) {
    this.setState({currentPage: currentPage});
  }

  render() {
    return (
      <div>
          <NavBar />
          <SideBar currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
          <div className="tableSection">
            <div id="title">
                <h1> {this.state.currentPage} </h1>
            </div>
            <hr></hr>
            <TableHeader currentPage={this.state.currentPage} />
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
