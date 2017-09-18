import React, { Component } from 'react';
import NavBar from "./NavBar.js";
import SideBar from "./SideBar.js";
import Page from "./Page.js";

import '../css/reset.css';
import footerStyles from "../css/footer.css";
import appStyles from "../css/app.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const page = this.props.page;

    return (
      <div id={appStyles.app}>
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
    <footer id={footerStyles.footer}>
      <p>2017 © QHacks Exec. Brought to you by Daniel Lucia</p>
    </footer>
  );
}

export default App;
