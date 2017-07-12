import React from "react";
import ReactDOM from "react-dom";

import Link from "./Link.js";
import HeaderLink from "./HeaderLink.js";
import Dropdown from "./Dropdown.js";
import PathHeader from "./PathHeader.js";

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul id = "header">
        <div id="top-half">
          <div id="inner-top-half">
            <a rel="noopener noreferrer" target="_blank" href="http://qhacks.io/">
              <img src={require("../images/logo.png")} alt="myHackathon logo" className="hvr-grow"></img>
            </a>
            Qhacks <span style={{fontWeight: "bold"}}> Admin </span>
          </div>
        </div>
        <WelcomeUser />
        <Messages />
        <HeaderLink className="dropbtn" iconName="fa fa-cog" value="Settings" />
        <HeaderLink className="dropbtn" iconName="fa fa-level-up" value="Logout" />
        <PathHeader currentPage={this.props.currentPage}/>
      </ul>
    );
  }
}

function WelcomeUser() {
  return (
    <Dropdown style    ={{borderLeft: "1px solid black"}}
              className="dropbtn"
              divClassName="dropdown"
              iconName ="fa fa-address-book"
              value    ="Welcome User"
              extraIcon="fa fa-angle-down">
      <Link iconName="fa fa-user" value="My Profile"/>
      <Link iconName="fa fa-level-up" value="Logout"/>
    </Dropdown>
  );
}

function Messages() {
  return (
    <Dropdown divClassName="dropdown"
              className="dropbtn"
              iconName ="fa fa-envelope-o"
              value    ="Messages"
              extraIcon="fa fa-angle-down">
      <Link className="dropbtn" href="#" iconName="" value="Link 1"> </Link>
      <Link className="dropbtn" href="#" iconName="" value="Link 2"> </Link>
    </Dropdown>
  );
}


export default NavBar;
