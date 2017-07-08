import React, { Component } from 'react';
import './App.css';
import Link from "compenants/Link.js";
import HeaderLink from "compenants/HeaderLink.js";
import SideBar from "compenants/SideBar.js";
import Dropdown from "compenants/Dropdown.js";

class App extends Component {
  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {pageName: "Applications"};
  }

  handlePageChange(pageName) {
    this.setState({pageName: pageName});
  }

  render() {
    return (
      <ul id = "header">
        <div id="top-half">
          <div id="inner-top-half">
            <a target="_blank" href="http://qhacks.io/">
              <img src="img/logo.png" alt="myHackathon logo" class="hvr-grow"></img>
            </a>
            Qhacks <span style = "font-weight:bold"> Admin </span>
          </div>
        </div>
        <WelcomeUser></WelcomeUser>
        <Messages></Messages>
        <HeaderLink className="dropbtn" iconName="fa fa-cog" value="Settings"></HeaderLink>
        <HeaderLink className="dropbtn" iconName="fa fa-level-up" value="Logout"></HeaderLink>
      </ul>
      <PathHeader></PathHeader>
      <SideBar onPageChange={this.handlePageChange}></SideBar>
      <div class = "tableSection">
        <div id ="title">
            <h1> {this.state.pageName} </h1>
        </div>
        <hr></hr>
        <TableHeader name={this.state.pageName}></TableHeader>
        <Table></Table>
      </div>
      <footer id="footer">
        <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
      </footer>
    }
  );
}

export default App;
