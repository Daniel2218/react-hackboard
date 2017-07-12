import React, { Component } from 'react';
import NavBar from "../components/NavBar.js";
import SideBar from "../components/SideBar.js";
import Page from "../components/Page.js";

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

  render() {
    return (
      <div>
          <NavBar currentPage={this.state.currentPage}/>
          <SideBar currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
          <Page currentPage={this.state.currentPage}
                headers={this.state.tableHeaders}
          />
          <footer id="footer">
            <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
          </footer>
      </div>
    );
  }
}

export default App;
