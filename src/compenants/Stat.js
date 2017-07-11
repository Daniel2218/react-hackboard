import React from "react";
import ReactDOM from "react-dom";
import StatBox from "../compenants/StatBox.js";

class Stat extends React.compenants {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="outer">
          <div id="outer-inner">
            <StatBox id="stat-box-1" iconClass="fa fa-files-o" value="5000" />
            <StatBox id="stat-box-2" iconClass="fa fa-check-circle" value="500" />
            <StatBox id="stat-box-3" iconClass="fa fa-window-close" value="50"/>
            <StatBox id="stat-box-4" iconClass="fa fa-share" value="5"/>
          </div>
      </div>
    );
  }
}

export default Stat;
