import React from "react";
import ReactDOM from "react-dom";
import PageSection from "./PageSection.js";
import Stat from "./Stat.js";
import TableContainer from "../containers/TableContainer.js";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const page = this.props.page;
    var pageSection = "";

    if(page === "Applications") {
      pageSection = <PageSection page={page}>
                <Stat />
                <TableContainer />
              </PageSection>;
    } else if (page === "Schedule") {
      pageSection = <PageSection page={page}>
              </PageSection>;
    } else {
      pageSection = <PageSection page={page}>
                <TableContainer />
              </PageSection>;
    }
    return pageSection;
  }
}

export default Page;
