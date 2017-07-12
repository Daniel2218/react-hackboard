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
      currentPage: "Applications"
    };
  }

  handlePageChange(currentPage) {
    this.setState({
      currentPage: currentPage
    });
  }

  render() {
    return (
      <div>
          <NavBar currentPage={this.state.currentPage}/>
          <SideBar currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
          <Page currentPage={this.state.currentPage}
                tableHeaders={this.state.tableHeaders}
                buttons={this.state.buttons}
          />
          <footer id="footer">
            <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
          </footer>
      </div>
    );
  }
}

export default App;
