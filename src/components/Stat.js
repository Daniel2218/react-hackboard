import React from "react";
import ReactDOM from "react-dom";
import StatBox from "./StatBox.js";

import styles from "../css/application.css";

class Stat extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id={styles.outer}>
          <div>
            <StatBox id={styles.statBox1} iconClass="fa fa-files-o"       value="5000" />
            <StatBox id={styles.statBox2} iconClass="fa fa-check-circle"  value="500" />
            <StatBox id={styles.statBox3} iconClass="fa fa-trash-o"       value="50"/>
            <StatBox id={styles.statBox4} iconClass="fa fa-share"         value="5"/>
          </div>
      </div>
    );
  }
}

export default Stat;
