import React from "react";
import ReactDOM from "react-dom";
import Link from "./Link.js";

import styles from "../css/topMenuItem.css";

class Dropdown extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const iconName       = this.props.iconName;
    const value          = this.props.value;
    const extraIcon      = this.props.extraIcon;
    const additonalStyle = this.props.style;

    return (
      <div className={styles.dropdown} style={additonalStyle}>
        <Link className={styles.dropbtn}
              iconName ={iconName}
              value    ={value}
              extraIcon={extraIcon}>
        </Link>
        <div className={styles.dropdownContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
