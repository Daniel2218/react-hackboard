import React from "react";
import ReactDOM from "react-dom";
import Link from "./Link.js";

import styles from "../css/navStyle.css";

class SideBar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const page = this.props.page;
      const onPageChange = this.props.onPageChange;

      return (
        <div id ={styles.nav}>
          <ul>
            <Link page={page} onPageChange={onPageChange} iconName="fa fa-files-o" value="Applications"> </Link>
            <Link page={page} onPageChange={onPageChange} iconName="fa fa-gift" value="Prizes"> </Link>
            <Link page={page} onPageChange={onPageChange} iconName="fa fa-calendar" value="Schedule"> </Link>
            <Link page={page} onPageChange={onPageChange} iconName="fa fa-university" value="Sponsors"> </Link>
            <Link page={page} onPageChange={onPageChange} iconName="fa fa-users" value="Users"> </Link>
          </ul>
        </div>
      );
    }
}

export default SideBar;
