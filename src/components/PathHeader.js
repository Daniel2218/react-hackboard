import React from "react";
import ReactDOM from "react-dom";

import styles from "../css/navStyle.css";

class PathHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id ={styles.pathHeader}>
          <div id={styles.spnGrey}>
            <i className="fa fa-home" id={styles.iSpace1} aria-hidden="true"></i> Home
              <i className="fa fa-angle-right" id={styles.iSpace2} aria-hidden="true"></i>
              {this.props.page}
          </div>
        </div>
    );
  }
}

export default PathHeader;
