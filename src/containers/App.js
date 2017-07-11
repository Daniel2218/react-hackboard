import React, { Component } from 'react';
import NavBar from "../compenants/NavBar.js";
import SideBar from "../compenants/SideBar.js";
import Table from "../compenants/Table.js";
import TableSection from "../compenants/PageSection.js";
import Stat from "../compenants/Stat.js";

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
      tableHeaders: this.getTableHeaders()
    };
  }

  handlePageChange(currentPage) {
    this.setState({
      currentPage: currentPage,
      tableHeaders: this.getTableHeaders()
    });
  }

  getTableHeaders() {
    var currentPage = this.state === undefined ? "Applications" : this.state.currentPage;
    var tb = [];

    if(currentPage === "Applications") {
      tb = ["Applicant ID","First Name","Last Name","Hacks","Status"];
    } else if (currentPage === "Prizes") {
      tb = ["ID","First Name","Description","Obtained By","Donated By"];
    } else if (currentPage === "Sponsors") {
      tb = ["ID","First Name","Last Name","Email","Phone","Donation Amount","Donation Recieved"];
    } else if (currentPage === "Users") {
      tb = ["ID","First Name","Last Name","Email","Phone","Postion"];
    }
    return tb;
  }

  Compenant() {
    const compenants = "";

    if(currentPage === "Applications") {
      compenants =
    }

    return compenants;
  }

  render() {
    return (
      <div>
          <NavBar currentPage={this.state.currentPage}/>
          <SideBar currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
          <PageSection currentPage={this.state.currentPage}
            <Compenant />
          />
          <div className="tableSection">
            <div id="title">
                <h1> {this.state.currentPage} </h1>
            </div>
            <hr></hr>
            <TableHeader currentPage={this.state.currentPage} />
            <Table headers={this.state.tableHeaders}/>
          </div>
          <footer id="footer">
            <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
          </footer>
      </div>
    );
  }
}

export default App;
