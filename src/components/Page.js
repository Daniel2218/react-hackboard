import React from "react";
import ReactDOM from "react-dom";
import PageSection from "./PageSection.js";
import Stat from "./Stat.js";
import Table from "./Table.js";
import TableHeader from "./TableHeader.js";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var page = "";

    if(this.props.currentPage === "Applications") {
      page = <PageSection currentPage={this.props.currentPage}>
                <Stat />
                <TableHeader currentPage={this.props.currentPage} />
                <Table headers={this.props.headers}/>
              </PageSection>;
    } else {
      page = <PageSection currentPage={this.props.currentPage}>
                <TableHeader currentPage={this.props.currentPage} />
                <Table headers={this.props.headers}/>
              </PageSection>;
    }
    return page;
  }
}

export default Page;
