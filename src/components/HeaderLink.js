import React from 'react';
import ReactDOM from "react-dom";
import Link from "./Link.js";

import styles from "../css/topMenuItem.css";

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iconName  = this.props.iconName;
    const value     = this.props.value;
    const extraIcon = this.props.extraIcon;

    return (
      <div className={styles.dropdown + " " + styles.divSize1}>
        <Link className={styles.dropbtn}
              iconName ={iconName}
              value    ={value}
              extraIcon={extraIcon}>
        </Link>
    </div>
    );
  }
}

export default HeaderLink;
