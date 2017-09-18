import React, { Component } from 'react';
import NavBar from "./NavBar.js";
import SideBar from "./SideBar.js";
import Page from "./Page.js";

import '../css/reset.css';
import styles from "../css/footer.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const page = this.props.page;

    return (
      <div style={{fontFamily: 'Open Sans, sans-serif'}}>
          <NavBar page={page}/>
          <SideBar page={page} onPageChange={this.props.onPageChange}/>
          <Page page={page} />
          <Footer />
      </div>
    );
  }
}

function Footer() {
  return (
    <footer id={styles.footer}>
      <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
    </footer>
  );
}

export default App;
