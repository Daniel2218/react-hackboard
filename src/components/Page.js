import React from "react";
import ReactDOM from "react-dom";
import PageSection from "./PageSection.js";
import Stat from "./Stat.js";
import Table from "./Table.js";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentPage = this.props.currentPage;
    var page = "";

    if (currentPage === "Schedule") {
      page = <PageSection currentPage={this.props.currentPage}>
              </PageSection>;
    } else {
      page = <PageSection currentPage={this.props.currentPage}>
                <Table currentPage={this.props.currentPage}
                       onButtonClick={this.toggleModal} />
              </PageSection>;
    }
    return page;
  }
}

export default Page;
