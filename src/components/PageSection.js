import React from "react";
import ReactDOM from "react-dom";
import TableHeader from "./TableHeader.js";

import styles from "../css/pageSection.css";

class PageSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.tableSection}>
        <div id={styles.title}>
            <h1> {this.props.page} </h1>
        </div>
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}

export default PageSection;
