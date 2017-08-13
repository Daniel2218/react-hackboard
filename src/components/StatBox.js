import React from "react";
import ReactDOM from "react-dom";

import styles from "../css/application.css";

class StatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const iconClass = this.props.iconClass + " fa-2x";

    return (
      <div id={this.props.id} className={styles.hvrGrow + " " + styles.statBox}>
          <i className={iconClass} aria-hidden="true"></i>
          Total: {this.props.value}
      </div>
    );
  }
}

export default StatBox;
