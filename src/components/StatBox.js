import React from "react";
import ReactDOM from "react-dom";

import styles from "../css/statBox.css";
import hvrStyles from "../css/hvrGrow.css";

class StatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const iconClass = this.props.iconClass + " fa-2x";

    return (
      <div id={this.props.id} className={styles.statBox + " " + hvrStyles.hvrGrow}>
          <i className={iconClass} aria-hidden="true"></i>
          Total: {this.props.value}
      </div>
    );
  }
}

export default StatBox;
