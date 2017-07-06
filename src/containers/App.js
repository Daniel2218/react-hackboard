import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    <body>
      <ul id = "header">
        <div id="top-half">
          <div id="inner-top-half">
            <a target="_blank" href="http://qhacks.io/">
              <img src="img/logo.png" alt="myHackathon logo" class="hvr-grow" >
            </a>
            Qhacks<span style = "font-weight:bold"> Admin </span>
          </div>
        </div>
        <Dropdown style    ="border-left: 1px solid black;"
                  href     ="#"
                  iconName ="fa fa-address-book"
                  value    ="Welcome User"
                  extraIcon="fa fa-angle-down">
          <Link className="dropbtn" href="#" iconName="fa fa-user" value="My Profile"> </Link>
          <Link className="dropbtn" href="#" iconName="fa fa-level-up" value="Logout"> </Link>
        </Dropdown>
        <Dropdown href     ="#"
                  iconName ="fa fa-envelope-o"
                  value    ="Messages"
                  extraIcon="fa fa-angle-down">
          <Link className="dropbtn" href="#" iconName="" value="Link 1"> </Link>
          <Link className="dropbtn" href="#" iconName="" value="Link 2"> </Link>
        </Dropdown>
        <HeaderLink className="dropbtn" href="#" iconName="fa fa-cog" value="Settings"></HeaderLink>
        <HeaderLink className="dropbtn" href="#" iconName="fa fa-level-up" value="Logout"></HeaderLink>
      </ul>
    </body>
    <SideBar></SideBar>
    }
}

export default App;
