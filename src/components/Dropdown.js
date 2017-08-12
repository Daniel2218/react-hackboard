import React from "react";
import ReactDOM from "react-dom";
import Link from "./Link.js";
import styles from "../css/navStyle.css";

class Dropdown extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const iconName     = this.props.iconName;
    const value        = this.props.value;
    const extraIcon    = this.props.extraIcon;

    return (
      <div className={styles.dropdown}>
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
