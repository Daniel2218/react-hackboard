import React from "react";
import ReactDOM from "react-dom";

import Link from "./Link.js";
import HeaderLink from "./HeaderLink.js";
import Dropdown from "./Dropdown.js";
import PathHeader from "./PathHeader.js";

import styles from "../css/navStyle.css";

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const page = this.props.page;

    return (
      <ul id={styles.header}>
        <div id={styles.topHalf}>
          <div id={styles.innerTopHalf}>
            <a rel="noopener noreferrer" target="_blank" href="http://qhacks.io/">
              <img src={require("../images/logo.png")} alt="myHackathon logo" className={styles.hvrGrow}></img>
            </a>
            Qhacks <span style={{fontWeight: "bold"}}> Admin </span>
          </div>
        </div>
        <WelcomeUser />
        <Messages />
        <HeaderLink iconName="fa fa-cog" value="Settings" />
        <HeaderLink iconName="fa fa-level-up" value="Logout" />
        <PathHeader page={page}/>
      </ul>
    );
  }
}

function WelcomeUser() {
  return (
    <Dropdown style    ={{borderLeft: "1px solid black"}}
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
    <Dropdown iconName ="fa fa-envelope-o"
              value    ="Messages"
              extraIcon="fa fa-angle-down">
      <Link className={styles.dropbtn} href="#" iconName="" value="Link 1"> </Link>
      <Link className={styles.dropbtn}  href="#" iconName="" value="Link 2"> </Link>
    </Dropdown>
  );
}


export default NavBar;
